import type { Metadata } from "next";
import { LegalPage, Section } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of the BuildShip AI website and services.",
};

export default function TermsOfService() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="September 2026">
      <Section title="1. Acceptance of terms">
        <p>
          By accessing this website or engaging BuildShip AI for any
          service, you agree to these Terms of Service. If you do not agree,
          please do not use the website or our services.
        </p>
        <p>
          These terms apply to visitors browsing the website, leads
          submitting audit requests, and clients who enter into a paid
          engagement with BuildShip AI.
        </p>
      </Section>

      <Section title="2. Services described">
        <p>
          BuildShip AI provides custom WhatsApp automation design,
          development, testing, and support for businesses. The scope of
          each engagement is defined during and after the free audit, and
          confirmed in a written proposal or agreement before any paid work
          begins.
        </p>
        <p>
          This website is a marketing and lead-generation site. Nothing on
          this site constitutes a binding offer, guarantee of results, or
          contract until a written agreement is signed by both parties.
        </p>
      </Section>

      <Section title="3. Free audit">
        <p>
          The free 15-minute automation audit is offered at no cost and with
          no obligation. It is a preliminary consultation to assess your
          workflow and determine whether automation is appropriate for your
          business.
        </p>
        <p>
          Requesting an audit does not commit you to any paid engagement, nor
          does it commit BuildShip AI to providing a specific solution. We
          reserve the right to decline audit requests at our discretion.
        </p>
      </Section>

      <Section title="4. Founding Client Program">
        <p>
          The Founding Client Program is a limited-availability offering for
          up to three businesses. The starting price of ₦100,000 is an
          indicative floor, not a fixed quote. Final pricing depends on the
          workflow complexity, required integrations, and agreed scope as
          determined after the audit.
        </p>
        <p>
          Founding Client pricing and terms are formalised in a separate
          written agreement before work begins. We make no guarantee that
          the programme will remain available or that a specific price will
          apply without a signed agreement.
        </p>
      </Section>

      <Section title="5. Payment and delivery">
        <p>
          Payment terms, deliverables, timelines, and milestones are defined
          in the individual project agreement. Unless otherwise stated in
          that agreement:
        </p>
        <ul>
          <li>A deposit is required before work begins</li>
          <li>Remaining payment is due on agreed milestones or at project completion</li>
          <li>We do not begin or continue work on unpaid invoices beyond the agreed grace period</li>
        </ul>
        <p>
          All prices are in Nigerian Naira (₦) unless explicitly stated
          otherwise. Invoices are issued in NGN and are payable by bank
          transfer or agreed payment method.
        </p>
      </Section>

      <Section title="6. Client responsibilities">
        <p>To deliver the agreed automation, you agree to:</p>
        <ul>
          <li>Provide accurate and complete business information required for the workflow</li>
          <li>Review and approve the proposed workflow before build begins</li>
          <li>Provide timely feedback during testing phases</li>
          <li>
            Ensure your WhatsApp Business/API account is appropriately set up
            and approved for your use case
          </li>
          <li>Obtain any necessary permissions from your customers for automated messaging</li>
        </ul>
        <p>
          Delays caused by late feedback, missing access, or incomplete
          information are not BuildShip AI&apos;s responsibility and may
          affect delivery timelines without constituting a breach on our
          part.
        </p>
      </Section>

      <Section title="7. WhatsApp and third-party platforms">
        <p>
          BuildShip AI builds automations that operate through WhatsApp&apos;s
          Business API and related third-party platforms. Our services are
          subject to Meta&apos;s WhatsApp Business Policy and any applicable
          platform terms.
        </p>
        <p>
          We are not Meta and have no control over WhatsApp&apos;s platform
          availability, policy changes, or account approvals. If a WhatsApp
          Business account or API access is suspended or revoked by Meta,
          BuildShip AI is not liable for resulting service disruption.
        </p>
      </Section>

      <Section title="8. No guarantee of results">
        <p>
          We do not guarantee specific business outcomes such as revenue
          increases, lead conversion rates, or customer response volumes.
          Automation is a tool; results depend on your business, your
          customers, and factors outside our control.
        </p>
        <p>
          We guarantee that we will build and test the agreed workflow to the
          scope defined in your project agreement.
        </p>
      </Section>

      <Section title="9. AI limitations and human oversight">
        <p>
          AI systems can make mistakes, misunderstand inputs, or produce
          unexpected outputs. Every automation we build includes explicit
          boundaries on what the AI should and should not handle, and a
          human escalation path for uncertain or sensitive cases.
        </p>
        <p>
          You are responsible for reviewing, approving, and monitoring the
          AI&apos;s behaviour in your business context. BuildShip AI is not
          liable for losses arising from AI responses that fall outside the
          agreed and tested workflow boundaries.
        </p>
      </Section>

      <Section title="10. Intellectual property">
        <p>
          All content on this website — including copy, design, and code —
          is owned by BuildShip AI unless otherwise stated.
        </p>
        <p>
          Automation workflows, code, and configurations built for a client
          become the client&apos;s property upon full payment, as specified
          in the project agreement. BuildShip AI retains the right to
          describe the nature of the work (without disclosing confidential
          business information) for portfolio and marketing purposes, unless
          the client requests confidentiality in writing.
        </p>
      </Section>

      <Section title="11. Confidentiality">
        <p>
          Both parties agree to treat confidential business information
          shared during the engagement as confidential and not to disclose
          it to third parties without written consent. This obligation
          survives termination of the engagement for a period of two years.
        </p>
      </Section>

      <Section title="12. Limitation of liability">
        <p>
          To the maximum extent permitted by Nigerian law, BuildShip AI&apos;s
          total liability for any claim arising from the use of this website
          or our services is limited to the amount paid by the client for
          the specific engagement giving rise to the claim.
        </p>
        <p>
          BuildShip AI is not liable for indirect, incidental, special,
          consequential, or punitive damages, including lost profits, loss
          of business, or data loss.
        </p>
      </Section>

      <Section title="13. Termination">
        <p>
          Either party may terminate a project engagement with 14 days&apos;
          written notice. Work completed up to the termination date is
          billable at the agreed rate. Deposits are non-refundable unless
          BuildShip AI is unable to deliver the agreed scope through no
          fault of the client.
        </p>
      </Section>

      <Section title="14. Governing law">
        <p>
          These terms are governed by the laws of the Federal Republic of
          Nigeria. Any dispute arising from these terms or our services
          shall first be subject to good-faith negotiation. If unresolved,
          the parties agree to submit to the jurisdiction of the courts of
          Lagos State, Nigeria.
        </p>
      </Section>

      <Section title="15. Changes to these terms">
        <p>
          We may update these Terms of Service from time to time. The
          &quot;Last updated&quot; date at the top of this page reflects the
          most recent revision. Continued use of this website after changes
          are posted constitutes acceptance of the updated terms.
        </p>
        <p>
          For active client engagements, material changes to terms require
          written agreement from both parties.
        </p>
      </Section>

      <Section title="16. Contact">
        <p>
          For questions about these terms, contact us at{" "}
          <a href="mailto:hello@buildshipai.com" className="legal-link">
            hello@buildshipai.com
          </a>{" "}
          or via WhatsApp (link in the footer).
        </p>
      </Section>
    </LegalPage>
  );
}
