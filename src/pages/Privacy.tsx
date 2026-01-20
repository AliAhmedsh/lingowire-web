import { PageShell } from "../components/Layout";

function PrivacyPage() {
  return (
    <PageShell>
      <main className="bg-gradient-to-b from-[#f7f9ff] to-white py-[70px] sm:py-[110px]">
        <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8 space-y-10">
          <header className="rounded-2xl bg-white/85 p-6 shadow-[0px_16px_60px_rgba(34,57,130,0.12)] backdrop-blur">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#223982] px-3 py-1 text-[12px] font-semibold text-white sm:text-[13px]">
              <span>Privacy</span>
              <span className="text-white/70">We never sell your data</span>
            </div>
            <h1 className="mt-4 font-['Source_Sans_Pro'] text-[34px] font-semibold leading-[42px] text-[#1a1f3c] sm:text-[54px] sm:leading-[62px]">
              Your trust is our baseline
            </h1>
            <p className="mt-3 text-[16px] leading-[26px] text-[#1f2740] sm:text-[20px] sm:leading-[30px]">
              We collect only what we need to run Lingowire, personalize practice, and keep the community safe. We minimize retention and encrypt data in transit and at rest.
            </p>
          </header>

          <section className="space-y-3 rounded-2xl border border-[#dfe6ff] bg-white p-6 shadow-sm">
            <h2 className="text-[18px] font-semibold text-[#223982] sm:text-[22px]">What we collect</h2>
            <ul className="list-disc space-y-2 pl-6 text-[15px] leading-[23px] sm:text-[18px] sm:leading-[27px] text-[#1a1a1a]">
              <li>Account: email, display name/handle, profile image, languages, goals.</li>
              <li>Usage: sessions joined, progress signals, device/app version for diagnostics.</li>
              <li>Safety: limited conversation metadata and reports to enforce community rules.</li>
              <li>Optional: feedback you share with support or surveys.</li>
            </ul>
          </section>

          <section className="space-y-3 rounded-2xl border border-[#dfe6ff] bg-white p-6 shadow-sm">
            <h2 className="text-[18px] font-semibold text-[#223982] sm:text-[22px]">How we use it</h2>
            <ul className="list-disc space-y-2 pl-6 text-[15px] leading-[23px] sm:text-[18px] sm:leading-[27px] text-[#1a1a1a]">
              <li>Match you with partners, groups, and prompts that fit your goals and level.</li>
              <li>Improve app quality: diagnostics to keep calls, chat, and practice reliable.</li>
              <li>Safety: detect abuse, respond to reports, and keep conversations respectful.</li>
              <li>Product decisions: anonymized insights to shape features learners need.</li>
            </ul>
          </section>

          <section className="space-y-3 rounded-2xl border border-[#dfe6ff] bg-white p-6 shadow-sm">
            <h2 className="text-[18px] font-semibold text-[#223982] sm:text-[22px]">Your choices & control</h2>
            <ul className="list-disc space-y-2 pl-6 text-[15px] leading-[23px] sm:text-[18px] sm:leading-[27px] text-[#1a1a1a]">
              <li>Access/Deletion: request your data or deletion anytime at <a className="text-[#223982] font-semibold" href="mailto:privacy@lingowire.com">privacy@lingowire.com</a>.</li>
              <li>Preferences: adjust notifications and profile visibility in-app (where available).</li>
              <li>Marketing: unsubscribe via email footers; transactional emails may still send.</li>
              <li>Permissions: you can revoke camera/mic access via your device settings.</li>
            </ul>
          </section>

          <section className="space-y-3 rounded-2xl border border-[#dfe6ff] bg-white p-6 shadow-sm">
            <h2 className="text-[18px] font-semibold text-[#223982] sm:text-[22px]">Retention & security</h2>
            <p className="text-[15px] leading-[23px] sm:text-[18px] sm:leading-[27px] text-[#1a1a1a]">
              We retain only what’s necessary for account continuity, safety, and legal compliance. Data is encrypted in transit and at rest, and access is restricted to vetted team members. If you close your account, we remove personal data except where law or safety investigations require limited retention.
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border border-[#dfe6ff] bg-white p-6 shadow-sm">
            <h2 className="text-[18px] font-semibold text-[#223982] sm:text-[22px]">Third parties</h2>
            <p className="text-[15px] leading-[23px] sm:text-[18px] sm:leading-[27px] text-[#1a1a1a]">
              We use trusted infrastructure and analytics providers to run the service. They are bound by confidentiality and data protection agreements and may only process data to support Lingowire operations.
            </p>
          </section>

          <section className="space-y-2 rounded-2xl border border-[#dfe6ff] bg-white p-6 shadow-sm">
            <h2 className="text-[18px] font-semibold text-[#223982] sm:text-[22px]">Contact</h2>
            <p className="text-[15px] leading-[23px] sm:text-[18px] sm:leading-[27px] text-[#1a1a1a]">
              Questions or requests? Email <a className="text-[#223982] font-semibold" href="mailto:privacy@lingowire.com">privacy@lingowire.com</a>.
            </p>
          </section>
        </div>
      </main>
    </PageShell>
  );
}

export default PrivacyPage;
