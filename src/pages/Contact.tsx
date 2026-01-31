import { PageShell } from "../components/Layout";

function ContactPage() {
  return (
    <PageShell>
      <main className="bg-gradient-to-b from-[#f3f6ff] to-white py-[70px] sm:py-[110px]">
        <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8 space-y-10">
          <header className="rounded-2xl bg-white/80 p-6 shadow-[0px_16px_60px_rgba(34,57,130,0.12)] backdrop-blur">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#223982] px-3 py-1 text-[12px] font-semibold text-white sm:text-[13px]">
              <span>Contact</span>
              <span className="text-white/70">We reply in 1–2 business days</span>
            </div>
            <h1 className="mt-4 font-['Source_Sans_Pro'] text-[34px] font-semibold leading-[42px] text-[#1a1f3c] sm:text-[54px] sm:leading-[62px]">
              Let’s talk about Lingowire
            </h1>
            <p className="mt-3 text-[16px] leading-[26px] text-[#1f2740] sm:text-[20px] sm:leading-[30px]">
              Whether you’re exploring partnerships, need support, or want to share feedback, we’re here. Tell us a bit more and we’ll route you to the right person.
            </p>
          </header>

          <section className="grid gap-8 sm:grid-cols-[1.05fr_1fr]">
            <div className="space-y-5 rounded-2xl border border-[#d7e4ff] bg-white p-6 shadow-sm">
              <h2 className="text-[18px] font-semibold text-[#223982] sm:text-[22px]">Reach us directly</h2>
              <div className="space-y-3 text-[15px] leading-[23px] text-[#1a1a1a] sm:text-[18px] sm:leading-[27px]">
                <p>
                  • General inquiries: <a className="text-[#223982] font-semibold" href="mailto:hello@lingowire.com">hello@lingowire.com</a><br />
                  • Partnerships: <a className="text-[#223982] font-semibold" href="mailto:hello@lingowire.com">hello@lingowire.com</a><br />
                  • Support: <a className="text-[#223982] font-semibold" href="mailto:hello@lingowire.com">hello@lingowire.com</a>
                </p>
                <p>
                  Prefer socials? Follow us on TikTok, Instagram, or X for product updates, launch news, and weekly practice prompts.
                </p>
                <p>
                  Press & speaking: <a className="text-[#223982] font-semibold" href="mailto:hello@lingowire.com">hello@lingowire.com</a>
                </p>
              </div>
            </div>

            <form className="space-y-4 rounded-2xl border border-[#cbd8ff] bg-white p-6 shadow-[0px_16px_60px_rgba(34,57,130,0.08)]" onSubmit={(e) => e.preventDefault()}>
              <div className="flex items-center justify-between">
                <h2 className="text-[18px] font-semibold text-[#223982] sm:text-[22px]">Send us a note</h2>
                <span className="rounded-full bg-[#e8edff] px-3 py-1 text-[12px] font-semibold text-[#223982]">Avg. response: 24–48h</span>
              </div>
              <label className="block text-[14px] font-semibold text-[#223982] sm:text-[16px]">
                Name
                <input
                  required
                  type="text"
                  className="mt-2 w-full rounded-xl border border-[#cbd8ff] bg-white px-3 py-2 text-[14px] sm:text-[16px] focus:border-[#223982] focus:outline-none"
                  placeholder="Jane Doe"
                />
              </label>
              <label className="block text-[14px] font-semibold text-[#223982] sm:text-[16px]">
                Email
                <input
                  required
                  type="email"
                  className="mt-2 w-full rounded-xl border border-[#cbd8ff] bg-white px-3 py-2 text-[14px] sm:text-[16px] focus:border-[#223982] focus:outline-none"
                  placeholder="you@example.com"
                />
              </label>
              <label className="block text-[14px] font-semibold text-[#223982] sm:text-[16px]">
                Topic
                <input
                  type="text"
                  className="mt-2 w-full rounded-xl border border-[#cbd8ff] bg-white px-3 py-2 text-[14px] sm:text-[16px] focus:border-[#223982] focus:outline-none"
                  placeholder="Partnerships, support, feedback, press, other"
                />
              </label>
              <label className="block text-[14px] font-semibold text-[#223982] sm:text-[16px]">
                Message
                <textarea
                  required
                  rows={6}
                  className="mt-2 w-full rounded-xl border border-[#cbd8ff] bg-white px-3 py-2 text-[14px] sm:text-[16px] focus:border-[#223982] focus:outline-none"
                  placeholder="Share as much context as you can."
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-xl bg-[#223982] px-4 py-3 text-[16px] font-semibold text-white transition hover:bg-[#1a2f6a]"
              >
                Send message
              </button>
              <p className="text-[12px] leading-[18px] text-[#4a4a4a] sm:text-[14px] sm:leading-[20px]">
                By submitting, you agree to our <a className="text-[#223982] font-semibold" href="/privacy">Privacy Policy</a> and
                <a className="text-[#223982] font-semibold" href="/terms"> Terms.</a>
              </p>
            </form>
          </section>
        </div>
      </main>
    </PageShell>
  );
}

export default ContactPage;
