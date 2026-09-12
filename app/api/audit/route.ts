import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// This route is the integration boundary for audit-request submissions.
// It validates the payload, then emails the lead to whoever monitors
// AUDIT_NOTIFICATION_EMAIL via Resend. No secrets live in client code —
// RESEND_API_KEY is read from the server environment only.

type AuditPayload = {
  name: string;
  businessName: string;
  businessType: string;
  whatsappNumber: string;
  website?: string;
  enquiriesPerDay?: string;
  repetitiveTask: string;
  message?: string;
  consent: boolean;
};

const REQUIRED_FIELDS: (keyof AuditPayload)[] = [
  "name",
  "businessName",
  "businessType",
  "whatsappNumber",
  "repetitiveTask",
];

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderEmailHtml(payload: AuditPayload) {
  const rows: [string, string | undefined][] = [
    ["Name", payload.name],
    ["Business name", payload.businessName],
    ["Business type", payload.businessType],
    ["WhatsApp number", payload.whatsappNumber],
    ["Website / social", payload.website],
    ["Enquiries per day", payload.enquiriesPerDay],
    ["Biggest repetitive task", payload.repetitiveTask],
    ["Message", payload.message],
  ];

  const rowsHtml = rows
    .filter(([, value]) => isNonEmptyString(value))
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;color:#8E8E9E;font-size:13px;vertical-align:top;white-space:nowrap;">${label}</td><td style="padding:8px 12px;color:#0C0C0F;font-size:14px;">${escapeHtml(
          value as string
        )}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:sans-serif;max-width:520px;margin:0 auto;">
      <h2 style="color:#0C0C0F;">New automation audit request</h2>
      <table style="border-collapse:collapse;width:100%;background:#fafafa;border-radius:8px;overflow:hidden;">
        ${rowsHtml}
      </table>
      <p style="color:#8E8E9E;font-size:12px;margin-top:16px;">
        Received ${new Date().toLocaleString("en-NG", { timeZone: "Africa/Lagos" })} (WAT)
      </p>
    </div>
  `;
}

export async function POST(req: NextRequest) {
  let body: Partial<AuditPayload>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const missing = REQUIRED_FIELDS.filter(
    (field) => !isNonEmptyString(body[field] as unknown as string)
  );

  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Missing required fields: ${missing.join(", ")}` },
      { status: 400 }
    );
  }

  if (body.consent !== true) {
    return NextResponse.json(
      { error: "Privacy consent is required." },
      { status: 400 }
    );
  }

  const payload = body as AuditPayload;
  const apiKey = process.env.RESEND_API_KEY;
  const notificationEmail = process.env.AUDIT_NOTIFICATION_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL || "BuildShip AI <onboarding@resend.dev>";

  if (!apiKey || !notificationEmail) {
    // Fail loudly in server logs so a missing deployment config is obvious,
    // but don't leak configuration details to the client.
    console.error(
      "Audit request received but RESEND_API_KEY or AUDIT_NOTIFICATION_EMAIL is not configured."
    );
    return NextResponse.json(
      { error: "The audit request service isn't configured yet. Please message us on WhatsApp instead." },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: notificationEmail,
      replyTo: undefined,
      subject: `New audit request — ${payload.businessName}`,
      html: renderEmailHtml(payload),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Couldn't send your request right now. Please try again or message us on WhatsApp." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("Audit request email failed:", err);
    return NextResponse.json(
      { error: "Couldn't send your request right now. Please try again or message us on WhatsApp." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
