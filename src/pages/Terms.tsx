import { PageShell } from "../components/Layout";

function TermsPage() {
  return (
    <PageShell>
      <main className="bg-gradient-to-b from-[#f6f7ff] to-white py-[70px] sm:py-[110px]">
        <div className="mx-auto w/full max-w-[1100px] px-5 sm:px-8 space-y-10">
          <header className="rounded-2xl bg-white/85 p-6 shadow-[0px_16px_60px_rgba(34,57,130,0.12)] backdrop-blur">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#223982] px-3 py-1 text-[12px] font-semibold text-white sm:text-[13px]">
              <span>Terms</span>
              <span className="text-white/70">Community-first principles</span>
            </div>
            <h1 className="mt-4 font-['Source_Sans_Pro'] text-[34px] font-semibold leading-[42px] text-[#1a1f3c] sm:text-[54px] sm:leading-[62px]">
              Use Lingowire responsibly
            </h1>
            <p className="mt-3 text-[16px] leading-[26px] text-[#1f2740] sm:text-[20px] sm:leading-[30px]">
              These terms keep practice spaces respectful, safe, and fair. By using Lingowire you agree to follow them and the community guidelines.
            </p>
          </header>

          <section className="space-y-3 rounded-2xl border border-[#dfe6ff] bg-white p-6 shadow-sm">
            <h2 className="text-[18px] font-semibold text-[#223982] sm:text-[22px]">Use of the service</h2>
            <ul className="list-disc space-y-2 pl-6 text-[15px] leading-[23px] sm:text-[18px] sm:leading-[27px] text-[#1a1a1a]">
              <li>Be respectful: no harassment, hate speech, or harmful content.</li>
              <li>Authentic participation: no bots, spam, impersonation, or scraping.</li>
              <li>Safety first: report issues to <a className="text-[#223982] font-semibold" href="mailto:support@lingowire.com">support@lingowire.com</a>.</li>
            </ul>
          </section>

          <section className="space-y-3 rounded-2xl border border-[#dfe6ff] bg-white p-6 shadow-sm">
            <h2 className="text-[18px] font-semibold text-[#223982] sm:text-[22px]">Accounts & payments</h2>
            <ul className="list-disc space-y-2 pl-6 text-[15px] leading-[23px] sm:text-[18px] sm:leading-[27px] text-[#1a1a1a]">
              <li>You’re responsible for your account security and activity.</li>
              <li>Subscriptions (if offered) auto-renew per App Store / Google Play terms; manage billing there.</li>
              <li>Refunds follow the policies of your app store; we don’t override store rules.</li>
            </ul>
          </section>

          <section className="space-y-3 rounded-2xl border border-[#dfe6ff] bg-white p-6 shadow-sm">
            <h2 className="text-[18px] font-semibold text-[#223982] sm:text-[22px]">Content & conduct</h2>
            <ul className="list-disc space-y-2 pl-6 text-[15px] leading-[23px] sm:text-[18px] sm:leading-[27px] text-[#1a1a1a]">
              <li>You grant Lingowire a limited license to host and display your contributions to operate the service.</li>
              <li>No illegal, infringing, or unsafe material. Respect IP and privacy of others.</li>
              <li>We may moderate, suspend, or remove accounts that violate these terms or community guidelines.</li>
            </ul>
          </section>

          <section className="space-y-3 rounded-2xl border border-[#dfe6ff] bg-white p-6 shadow-sm">
            <h2 className="text-[18px] font-semibold text-[#223982] sm:text-[22px]">Disclaimers & liability</h2>
            <ul className="list-disc space-y-2 pl-6 text-[15px] leading-[23px] sm:text-[18px] sm:leading-[27px] text-[#1a1a1a]">
              <li>Service is provided “as is”; features and availability may change.</li>
              <li>To the extent allowed by law, we’re not liable for indirect or consequential damages.</li>
              <li>Some jurisdictions limit disclaimers; where they do, your rights may differ.</li>
            </ul>
          </section>

          <section className="space-y-2 rounded-2xl border border-[#dfe6ff] bg-white p-6 shadow-sm">
            <h2 className="text-[18px] font-semibold text-[#223982] sm:text-[22px]">Updates</h2>
            <p className="text-[15px] leading-[23px] sm:text-[18px] sm:leading-[27px] text-[#1a1a1a]">
              We may update these terms. Continued use means you accept the latest version. We’ll notify users of material changes.
            </p>
          </section>

          <section className="space-y-2 rounded-2xl border border-[#dfe6ff] bg-white p-6 shadow-sm">
            <h2 className="text-[18px] font-semibold text-[#223982] sm:text-[22px]">Contact</h2>
            <p className="text-[15px] leading-[23px] sm:text-[18px] sm:leading-[27px] text-[#1a1a1a]">
              Questions about these terms? Email <a className="text-[#223982] font-semibold" href="mailto:support@lingowire.com">support@lingowire.com</a>.
            </p>
          </section>
        </div>
      </main>
    </PageShell>
  );
}

export default TermsPage;
