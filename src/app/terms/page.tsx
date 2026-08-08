import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Tygon Solutions",
  description:
    "Read the Terms & Conditions governing the use of the Tygon Solutions website and our digital services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/50">
          Legal
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Terms &amp; Conditions
        </h1>

        <p className="mt-4 text-white/60">
          Last updated: August 2026
        </p>
      </div>

      <div className="prose prose-invert prose-lg max-w-none text-white/70">
        <p>
          These Terms &amp; Conditions govern your access to and use of the
          Tygon Solutions website and the information, services, and resources
          made available through it. By accessing or using this website, you
          agree to these terms.
        </p>

        <h3>1. About Tygon Solutions</h3>

        <p>
          Tygon Solutions provides digital and technology-related services,
          which may include software development, web development, mobile
          development, AI and automation, UI/UX design, digital marketing,
          cloud and DevOps, data and analytics, cybersecurity, content
          creation, consulting, and other technology services.
        </p>

        <p>
          The specific services, deliverables, timelines, fees, and
          responsibilities for a client engagement will be agreed upon
          separately between Tygon Solutions and the client.
        </p>

        <h3>2. Use of This Website</h3>

        <p>
          You may use this website for lawful purposes and in accordance with
          these Terms &amp; Conditions. You agree not to use the website in
          any way that could damage, disable, overburden, or impair the
          website or interfere with another person’s ability to use it.
        </p>

        <p>
          You must not attempt to gain unauthorized access to any part of the
          website, its systems, servers, databases, or related services.
        </p>

        <h3>3. Website Content</h3>

        <p>
          The content on this website, including text, graphics, logos,
          images, designs, software, and other materials, is provided for
          general informational purposes.
        </p>

        <p>
          While we make reasonable efforts to keep information accurate and
          current, we do not guarantee that all information on the website is
          complete, accurate, or up to date at all times.
        </p>

        <h3>4. Intellectual Property</h3>

        <p>
          Unless otherwise stated, the website and its original content,
          branding, logos, graphics, designs, and other materials are owned
          by or licensed to Tygon Solutions and are protected by applicable
          intellectual property laws.
        </p>

        <p>
          You may not reproduce, modify, distribute, republish, sell, or
          commercially exploit website content without prior written
          permission, except where permitted by applicable law.
        </p>

        <h3>5. Client Projects and Deliverables</h3>

        <p>
          Work performed for clients is governed by the applicable project
          agreement, proposal, statement of work, contract, or other written
          agreement between the parties.
        </p>

        <p>
          These website Terms &amp; Conditions do not replace or override
          specific contractual terms agreed upon for an individual client
          project.
        </p>

        <h3>6. Third-Party Services</h3>

        <p>
          Our services and website may rely on or integrate with third-party
          platforms, software, hosting providers, APIs, payment providers,
          analytics services, communication tools, and other external
          services.
        </p>

        <p>
          Third-party services may be subject to their own terms, conditions,
          privacy policies, availability, and limitations. Tygon Solutions is
          not responsible for the independent operation or policies of
          third-party services.
        </p>

        <h3>7. Third-Party Links</h3>

        <p>
          This website may contain links to third-party websites or services.
          These links are provided for convenience and do not constitute an
          endorsement or guarantee of the third party’s content, products, or
          services.
        </p>

        <p>
          We are not responsible for the content, security, availability, or
          privacy practices of third-party websites.
        </p>

        <h3>8. Payments and Commercial Agreements</h3>

        <p>
          Where paid services are provided, pricing, payment schedules,
          refunds, milestones, project scope, and other commercial terms will
          be determined by the applicable agreement or proposal.
        </p>

        <p>
          A request for information or consultation through this website does
          not by itself create a client relationship or contractual
          obligation between you and Tygon Solutions.
        </p>

        <h3>9. Disclaimer</h3>

        <p>
          The website and its general informational content are provided on
          an &quot;as is&quot; and &quot;as available&quot; basis to the extent permitted by
          applicable law.
        </p>

        <p>
          We do not guarantee that the website will always be available,
          uninterrupted, secure, or free from errors or harmful components.
        </p>

        <h3>10. Limitation of Liability</h3>

        <p>
          To the maximum extent permitted by applicable law, Tygon Solutions
          will not be liable for indirect, incidental, consequential, special,
          or punitive damages arising from or related to your use of this
          website or reliance on information provided through it.
        </p>

        <p>
          Nothing in these Terms &amp; Conditions is intended to exclude or
          limit liability where such exclusion or limitation is prohibited by
          applicable law.
        </p>

        <h3>11. Privacy</h3>

        <p>
          Your use of this website may involve the collection and processing
          of personal information. Our handling of personal information is
          described in our{" "}
          <a
            href="/privacy"
            className="text-white underline underline-offset-4 hover:text-white/80"
          >
            Privacy Policy
          </a>
          .
        </p>

        <h3>12. Changes to These Terms</h3>

        <p>
          We may update these Terms &amp; Conditions from time to time to
          reflect changes to our website, services, business practices, or
          applicable requirements.
        </p>

        <p>
          When changes are made, the updated version will be published on this
          page with a revised &quot;Last updated&quot; date. Your continued use of the
          website after changes are published constitutes acceptance of the
          updated terms to the extent permitted by applicable law.
        </p>

        <h3>13. Governing Law</h3>

        <p>
          These Terms &amp; Conditions shall be governed by and interpreted in
          accordance with the applicable laws of India, without regard to
          conflict-of-law principles, unless otherwise required by applicable
          law or a separate written agreement.
        </p>

        <h3>14. Contact</h3>

        <p>
          If you have questions regarding these Terms &amp; Conditions, you
          can contact Tygon Solutions at{" "}
          <a
            href="mailto:tygonsolutions@gmail.com"
            className="text-white underline underline-offset-4 hover:text-white/80"
          >
            tygonsolutions@gmail.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}