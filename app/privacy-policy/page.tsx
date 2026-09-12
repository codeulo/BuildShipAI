import type { Metadata } from "next";
import { LegalPage, Section } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How BuildShip AI collects, uses and protects your information.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="September 2026">
      <Section title="1. Who we are">
        <p>
          BuildShip AI is a service operated by BuildShip AI (Lagos, Nigeria).
          We build custom WhatsApp AI automations for small and medium
          businesses. References to &quot;we&quot;, &quot;us&quot;, or
          &quot;our&quot; mean BuildShip AI. References to &quot;you&quot;
          mean the visitor, lead, or client using this website or our
          services.
        </p>
        <p>
          Contact us at any time:{" "}
          <a href="mailto:hello@buildshipai.com" className="legal-link">
            hello@buildshipai.com
          </a>{" "}
          or via WhatsApp (link in the footer).
        </p>
      </Section>

      <Section title="2. What information we collect">
        <p>When you submit an audit request form on this website, we collect:</p>
        <ul>
          <li>Your name and business name</li>
          <li>Your WhatsApp number (used to contact you about the audit)</li>
          <li>Business type, website or social URL, and approximate daily enquiry volume</li>
          <li>A short description of your biggest repetitive task</li>
          <li>Any optional message you choose to include</li>
        </ul>
        <p>
          We do not collect payment card details, government ID, or any
          sensitive personal data through this website.
        </p>
        <p>
          We may also collect standard server-side access logs (IP address,
          browser type, referring URL, and timestamp) automatically when you
          visit the site. These are used solely for security and performance
          monitoring and are not linked to your identity.
        </p>
      </Section>

      <Section title="3. How we use your information">
        <p>We use the information you submit to:</p>
        <ul>
          <li>Contact you on WhatsApp to schedule and conduct your free automation audit</li>
          <li>Understand your business workflow and assess whether automation is suitable</li>
          <li>Prepare a proposed workflow if you proceed to an engagement</li>
          <li>Send occasional relevant updates about our services, if you have not opted out</li>
        </ul>
        <p>We will never sell, rent, or share your personal information with third-party marketers.</p>
      </Section>

      <Section title="4. Legal basis for processing (NDPR)">
        <p>
          We operate under Nigeria&apos;s National Data Protection Regulation
          (NDPR) 2019 and its implementing guidelines. Our legal bases for
          processing your data are:
        </p>
        <ul>
          <li>
            <strong>Consent</strong> — you provide explicit consent on the audit form before submission.
          </li>
          <li>
            <strong>Legitimate interest</strong> — follow-up communication
            related to an audit you requested falls within our legitimate
            business interests.
          </li>
        </ul>
      </Section>

      <Section title="5. Data retention">
        <p>
          We retain audit request data for up to 24 months from the date of
          submission, or for the duration of any active client engagement
          plus 12 months, whichever is longer. After that period, we securely
          delete or anonymise your personal data.
        </p>
        <p>
          If you ask us to delete your data before that period ends, we will
          do so within 14 days unless we have a legal obligation to retain
          it.
        </p>
      </Section>

      <Section title="6. How we store and protect your data">
        <p>
          Audit form submissions are transmitted over HTTPS and stored in
          access-controlled systems. We apply appropriate technical and
          organisational measures to prevent unauthorised access, disclosure,
          alteration, or destruction of your data.
        </p>
        <p>
          No method of transmission or storage is 100% secure. We will notify
          you promptly if we become aware of a breach affecting your personal
          data.
        </p>
      </Section>

      <Section title="7. Third-party services">
        <p>
          We use Resend to deliver audit request notifications by email, and
          Vercel Analytics to understand aggregate site traffic. Any such
          tool is bound by a data processing agreement consistent with NDPR
          requirements. We will update this section with the names of any
          additional active processors upon deployment.
        </p>
        <p>
          This website does not embed third-party advertising networks or
          sell data to any external parties.
        </p>
      </Section>

      <Section title="8. WhatsApp communications">
        <p>
          By providing your WhatsApp number and submitting the audit form,
          you consent to receiving WhatsApp messages from BuildShip AI
          related to your audit request. You can opt out at any time by
          replying &quot;STOP&quot; or contacting us directly.
        </p>
        <p>
          WhatsApp messages are transmitted through WhatsApp&apos;s
          infrastructure. Meta&apos;s{" "}
          <a
            href="https://www.whatsapp.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="legal-link"
          >
            WhatsApp Privacy Policy
          </a>{" "}
          governs the transmission of messages on their platform.
        </p>
      </Section>

      <Section title="9. Cookies and tracking">
        <p>
          This website uses Vercel Analytics to understand page traffic (e.g.
          page views, referral sources) at an aggregate level. It does not
          use cookies, cross-site tracking, advertising identifiers, or
          fingerprinting.
        </p>
      </Section>

      <Section title="10. Your rights">
        <p>Under the NDPR, you have the right to:</p>
        <ul>
          <li>Request access to the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data (subject to legal obligations)</li>
          <li>Withdraw consent at any time without affecting prior processing</li>
          <li>Lodge a complaint with the Nigeria Data Protection Commission (NDPC)</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:hello@buildshipai.com" className="legal-link">
            hello@buildshipai.com
          </a>
          . We will respond within 14 days.
        </p>
      </Section>

      <Section title="11. Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. When we do, we
          will update the &quot;Last updated&quot; date at the top of this
          page. Material changes will be communicated via the website or
          directly to active clients.
        </p>
      </Section>
    </LegalPage>
  );
}
