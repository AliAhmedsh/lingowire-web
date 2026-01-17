import { useState } from "react";
import logo from "./assets/logo.svg";
import downloadIcon from "./assets/download.svg";
import qr from "./assets/qr.svg";
import featureSpeak from "./assets/feature-speak.svg";
import featureConnect from "./assets/feature-connect.svg";
import featureGlobe from "./assets/feature-globe.svg";
import stepPractice from "./assets/step-practice.svg";
import stepConnect from "./assets/step-connect.svg";
import stepBelong from "./assets/step-belong.svg";
import faqCharacter from "./assets/faq-character.svg";
import faqBubble from "./assets/faq-bubble.svg";
import socialTiktok from "./assets/social-tiktok.svg";
import socialInstagram from "./assets/social-instagram.svg";
import socialX from "./assets/social-x.svg";
import footerLogo from "./assets/footer-logo.svg";
import appStoreBadge from "./assets/appStoreBadge.svg";
import playBadge from "./assets/playBadge.svg";
import heroRight from "./assets/hero-right.svg";
import devices from "./assets/devices.svg";
import flags from "./assets/flags.svg";

const assets = {
  logo,
  downloadIcon,
  qr,
  featureSpeak,
  featureConnect,
  featureGlobe,
  stepPractice,
  stepConnect,
  stepBelong,
  faqCharacter,
  faqBubble,
  socialTiktok,
  socialInstagram,
  socialX,
  footerLogo,
  appStoreBadge,
  playBadge,
  heroRight,
  devices,
  flags,
};

const features = [
  {
    title: "Speaking a language confidently requires actual practice.",
    icon: assets.featureSpeak,
  },
  {
    title: "Lingowire connects you with practice partners and groups.",
    icon: assets.featureConnect,
  },
  {
    title: "We support all spoken languages leaving no language behind.",
    icon: assets.featureGlobe,
  },
];

const steps = [
  {
    title: "Practice",
    copy: ["Prepare for real conversation", "with guided practice"],
    icon: assets.stepPractice,
  },
  {
    title: "Connect",
    copy: ["Find and connect with partners", "who speak your language"],
    icon: assets.stepConnect,
  },
  {
    title: "Belong",
    copy: [
      "Take a language class or teach",
      "to grow your skills and community",
    ],
    icon: assets.stepBelong,
  },
];

const faqs = [
  {
    question: "What is Lingowire?",
    answer:
      "LingoWire is a practice-focused language app that connects learners with real partners, guided prompts, and community groups — so you can actually speak the language, not just study it.",
  },
  {
    question: "How is LingoWire different from other language apps?",
    answer:
      "LingoWire isn’t gamified, lesson-heavy, or solo. You learn through real conversations with real people, supported by structured prompts and a global community.",
  },
  {
    question: "Do I need to be fluent to join?",
    answer:
      "No! LingoWire is for all levels; beginners, intermediate learners, and advanced speakers. You can find partners who match your fluency level.",
  },
  {
    question: "Is LingoWire free?",
    answer:
      "The app has a free tier with essential features. Additional features (such as teaching tools, advanced filters, and specialized groups) may be included in a premium plan.",
  },
  {
    question: "Can I teach on LingoWire and earn?",
    answer:
      "Yes. Qualified users can become community teachers, host sessions, and earn through paid practice or group conversations.",
  },
];

function AppStoreButtons({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-5 ${className ?? ""}`}>
      <a
        className="h-[45px] w-[135px]"
        href="#app-store"
        aria-label="Download on the App Store"
      >
        <img
          src={assets.appStoreBadge}
          alt="Download on the App Store"
          className="h-full w-full"
        />
      </a>
      <a
        className="h-[40px] w-[135px]"
        href="#google-play"
        aria-label="Get it on Google Play"
      >
        <img
          src={assets.playBadge}
          alt="Get it on Google Play"
          className="h-full w-full"
        />
      </a>
    </div>
  );
}

function NavBar() {
  return (
    <header className="rounded-b-2xl sticky top-0 z-50 bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
      <div className="mx-auto flex h-[64px] w-full max-w-[1417px] items-center justify-between px-4 sm:h-[98px] sm:px-[50px]">
        <img
          src={assets.logo}
          alt="Lingowire"
          className="h-[32px] w-[200px] sm:w-auto sm:h-[40px]"
        />
        <button className="flex h-[28px] items-center justify-center gap-1 rounded-[20px] bg-[#223982] px-3 text-[11px] font-semibold text-white sm:h-[45px] sm:w-[241px] sm:gap-2 sm:px-0 sm:text-[20px]">
          <span className="font-['Source_Sans_Pro'] sm:hidden">Download</span>
          <span className="hidden font-['Source_Sans_Pro'] sm:inline">
            Download Lingowire
          </span>
          <img
            src={assets.downloadIcon}
            alt="Download"
            className="h-3 w-3 sm:h-5 sm:w-5"
          />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-[#223982] -mt-4">
      <div className="mx-auto flex w-full max-w-[1417px] flex-col items-center justify-between gap-8 px-5 pb-10 pt-8 text-center sm:h-[650px] sm:flex-row sm:gap-0 sm:px-[50px] sm:pb-0 sm:pt-0 sm:text-left">
        <div className="max-w-[601px] text-white">
          <h1 className="font-['Source_Sans_Pro'] text-[30px] font-semibold leading-[36px] sm:text-[64px] sm:leading-[76px]">
            Speak your Language
            <br />
            with Confidence
          </h1>
          <p className="mt-4 text-[12px] leading-[16px] sm:mt-5 sm:text-[24px] sm:leading-[28px]">
            Connect with practice partners, have real conversations, and grow
            your fluency through community.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:mt-10 sm:items-start sm:gap-6">
            <AppStoreButtons />
          </div>
        </div>
        <div className="relative flex h-[300px] w-full max-w-[260px] items-center justify-center sm:h-[580px] sm:w-[640px] sm:max-w-none">
          <img
            src={assets.heroRight}
            alt="Lingowire hero"
            className="absolute inset-0 h-full w-full object-contain"
          />
          <div className="absolute bottom-2 left-2 hidden w-[220px] items-center gap-4 rounded-[20px] bg-white p-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] sm:bottom-6 sm:-left-8 sm:flex sm:w-[300px] sm:gap-5">
            <img
              src={assets.qr}
              alt="QR code to download"
              className="h-[60px] w-[60px] sm:h-[80px] sm:w-[80px]"
            />
            <span className="font-['Source_Sans_Pro'] text-[14px] leading-[18px] text-[#223982] sm:text-[24px] sm:leading-[28px]">
              Scan to download
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlagStrip() {
  return (
    <div className="bg-white mt-12">
      <div className="flag-marquee mx-auto h-[24px] w-full max-w-[1480px] sm:h-[39px]">
        <div className="flag-track h-full">
          <img
            src={assets.flags}
            alt="Country flags"
            className="h-full w-auto object-cover"
          />
          <img
            src={assets.flags}
            alt="Country flags duplicate"
            className="h-full w-auto object-cover"
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
}

function WhySection() {
  return (
    <section className="bg-white py-[48px] sm:py-[80px]">
      <div className="mx-auto w-full max-w-[1276px] px-5 sm:px-0">
        <h2 className="text-center font-['Source_Sans_Pro'] text-[20px] font-semibold leading-[24px] text-[#223982] sm:text-[40px] sm:leading-[44px]">
          Why Lingowire?
        </h2>
        <div className="mt-6 flex flex-col items-center gap-4 sm:mt-[60px] sm:flex-row sm:justify-between sm:gap-[40px]">
          {features.map((item) => (
            <div
              className="flex h-[220px] w-full max-w-[340px] flex-col items-center justify-between rounded-[20px] bg-[#223982] px-[10px] py-[20px] text-center text-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] sm:h-[339px] sm:w-[372px] sm:py-[60px]"
              key={item.title}
            >
              <img
                src={item.icon}
                alt=""
                className="h-[70px] w-[70px] sm:h-[123px] sm:w-[123px]"
              />
              <p className="text-[13px] leading-[18px] sm:text-[24px] sm:leading-[28px]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowSection() {
  return (
    <section className="bg-white py-[48px] sm:py-[80px]">
      <div className="mx-auto w-full max-w-[1276px] px-5 sm:px-0">
        <h2 className="text-center font-['Source_Sans_Pro'] text-[22px] font-semibold leading-[26px] text-[#223982] sm:text-[36px] sm:leading-[42px]">
          How It Works
        </h2>
        <div className="mt-6 flex flex-col items-center gap-10 sm:mt-[50px] sm:flex-row sm:items-start sm:gap-[120px]">
          <img
            src={assets.devices}
            alt="App devices"
            className="w-full max-w-[260px] sm:max-w-[500px] drop-shadow-lg"
          />
          <div className="flex flex-col mt-10 ml-12 items-center gap-8 sm:items-start sm:gap-[60px]">
            {steps.map((step, idx) => (
              <div
                className="flex items-center gap-4 sm:gap-6"
                key={step.title}
              >
                <img
                  src={step.icon}
                  alt=""
                  className={`${idx === 0 ? "h-[68px] w-[120px] sm:h-[88px] sm:w-[160px]" : ""} ${
                    idx === 1 ? "h-[52px] w-auto sm:h-[76px]" : ""
                  } ${idx === 2 ? "h-[56px] w-auto sm:h-[80px]" : ""}`.trim()}
                />
                <div className="max-w-[360px]">
                  <p className="font-['Source_Sans_Pro'] text-[20px] font-semibold leading-[26px] text-[#223982] sm:text-[32px] sm:leading-[36px]">
                    {step.title}
                  </p>
                  <p className="mt-1 text-[14px] leading-[18px] text-black sm:mt-2 sm:text-[18px] sm:leading-[22px]">
                    {step.copy[0]}
                    <br />
                    {step.copy[1]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-[48px] sm:py-[80px]">
      <div className="mx-auto w-full max-w-[1513px] px-5 sm:px-0">
        <div className="flex items-center gap-3 sm:hidden">
          <div className="flex flex-col items-center gap-1">
            <img src={assets.faqBubble} alt="" className="h-[40px] w-[40px]" />
            <img src={assets.faqCharacter} alt="" className="h-[52px] w-auto" />
          </div>
<div className="flex justify-center">
  <h2 className="ml-4 text-left font-['Source_Sans_Pro'] text-[32px] font-semibold leading-[38px] text-[#223982] md:text-[40px] md:leading-[44px]">
    Frequently Asked<br />Questions
  </h2>
</div>

        </div>
        <h2 className="hidden text-center font-['Source_Sans_Pro'] text-[32px] font-semibold leading-[38px] text-[#223982] sm:block md:text-[40px] md:leading-[44px]">
          Frequently<br />Asked Questions
        </h2>
        <div className="mt-4 flex flex-col items-center gap-5 sm:mt-[40px] sm:flex-row sm:items-start sm:justify-between sm:gap-[40px] sm:px-[50px]">
          <div className="relative hidden w-[280px] flex-col items-center sm:flex sm:w-[400px]">
            <img
              src={assets.faqBubble}
              alt=""
              className="h-[180px] w-[200px] mb-[-28px] sm:h-[220px] sm:w-[240px] sm:mb-[-36px]"
            />
            <img
              src={assets.faqCharacter}
              alt=""
              className="h-[220px] w-auto sm:h-[240px]"
            />
          </div>
          <div className="w-full rounded-[20px] border border-[#ccc] bg-white p-[12px] sm:w-[930px] sm:p-[20px]">
            <div className="flex flex-col gap-[12px] sm:gap-[17px]">
              {faqs.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={item.question}
                    className="rounded-[20px] bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between gap-4 rounded-[15px] border-b border-[#656667] bg-[#ecf8fe] px-[12px] py-[8px] text-left transition-colors hover:bg-[#e2f3fd] sm:gap-[76px] sm:px-[16px] sm:py-[12px]"
                    >
                      <p className="text-[12px] font-semibold tracking-[-0.24px] text-[#223982] sm:text-[24px] sm:tracking-[-0.48px]">
                        {item.question}
                      </p>
                      <span className="text-[18px] font-semibold text-[#223982] sm:text-[32px]">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="p-[8px] sm:p-[10px]">
                        <p className="text-[11px] tracking-[-0.2px] text-black sm:text-[20px] sm:tracking-[-0.4px]">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#223982]">
      <div className="mx-auto w-full max-w-[1513px] px-5 py-8 text-white sm:px-[40px] sm:py-[70px]">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <div className="space-y-2">
            <img
              src={assets.footerLogo}
              alt="Lingowire"
              className="h-[32px] w-[200px] sm:w-auto sm:h-[40px] mx-auto"
            />
            <p className="max-w-[265px] text-[12px] font-semibold leading-[16px] tracking-[-0.24px] sm:text-[20px] sm:leading-[24px] sm:tracking-[-0.4px]">
              Lingowire makes immersive language learning possible anywhere.
            </p>
          </div>
          <AppStoreButtons className="justify-center" />
        </div>
        <div className="mt-6 flex flex-col items-center gap-4 text-[10px] font-semibold sm:mt-[60px] sm:flex-row sm:items-center sm:justify-between sm:text-[20px]">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-[40px]">
            <a href="#contact">Contact Us</a>
            <span>|</span>
            <a href="#privacy">Privacy policy</a>
            <span>|</span>
            <a href="#terms">Terms & Conditions</a>
          </div>
          <p className="text-[10px] font-semibold tracking-[-0.2px] sm:text-[16px] sm:tracking-[-0.32px]">
            © 2026 Lingowire Inc
          </p>
        </div>
        <div className="mt-4 flex justify-center gap-[12px] sm:mt-[40px] sm:justify-end">
          <img
            src={assets.socialTiktok}
            alt="TikTok"
            className="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px]"
          />
          <img
            src={assets.socialInstagram}
            alt="Instagram"
            className="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px]"
          />
          <img
            src={assets.socialX}
            alt="X"
            className="h-[20px] w-[18px] sm:h-[24px] sm:w-[21px]"
          />
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar />
      <Hero />
      <FlagStrip />
      <WhySection />
      <HowSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
