import { Link } from "react-router-dom";
import footerLogo from "../assets/footer-logo.svg";
import appStoreBadge from "../assets/comingsoon.png";
import playBadge from "../assets/playBadge.svg";
import logo from "../assets/logo.svg";
import downloadIcon from "../assets/download.svg";
import socialTiktok from "../assets/social-tiktok.svg";
import socialInstagram from "../assets/social-instagram.svg";
import socialX from "../assets/social-x.svg";
import type { ReactNode } from "react";

function AppStoreButtons({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-5 ${className ?? ""}`}>
      <a
        className="h-[40px] w-[130px]"
        href="#app-store"
        aria-label="Download on the App Store"
      >
        <img
          src={appStoreBadge}
          alt="Download on the App Store"
          className="h-full w-full object-contain"
        />
      </a>
      <a
        className="h-[40px] w-[135px]"
        href="https://play.google.com/store/apps/details?id=com.lingowire"
        target="_blank"
        rel="noreferrer"
        aria-label="Get it on Google Play"
      >
        <img
          src={playBadge}
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
        <Link to="/" aria-label="Go to homepage" className="inline-flex items-center">
          <img
            src={logo}
            alt="Lingowire"
            className="h-[32px] sm:h-[40px] w-auto max-w-[180px] object-contain transition-transform hover:scale-[1.01] focus-visible:scale-[1.01]"
          />
        </Link>
        <a
          href="https://play.google.com/store/apps/details?id=com.lingowire"
          target="_blank"
          rel="noreferrer"
          className="flex h-[28px] items-center justify-center gap-1 rounded-[20px] bg-[#223982] px-3 text-[11px] font-semibold text-white sm:h-[45px] sm:w-[241px] sm:gap-2 sm:px-0 sm:text-[20px]"
        >
          <span className="font-['Source_Sans_Pro'] sm:hidden">Download</span>
          <span className="hidden font-['Source_Sans_Pro'] sm:inline">Download Lingowire</span>
          <img src={downloadIcon} alt="Download" className="h-3 w-3 sm:h-5 sm:w-5" />
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#223982]">
      <div className="mx-auto w-full max-w-[1513px] px-5 py-8 text-white sm:px-[40px] sm:py-[70px]">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <div className="space-y-2">
            <img
              src={footerLogo}
              alt="Lingowire"
              className="h-[32px] sm:h-[40px] w-auto max-w-[180px] mx-auto object-contain"
            />
            <p className="max-w-[265px] text-[12px] font-semibold leading-[16px] tracking-[-0.24px] sm:text-[20px] sm:leading-[24px] sm:tracking-[-0.4px]">
              Lingowire makes immersive language learning possible anywhere.
            </p>
          </div>
          <AppStoreButtons className="justify-center" />
        </div>
        <div className="mt-6 flex flex-col items-center gap-4 text-[10px] font-semibold sm:mt-[60px] sm:flex-row sm:items-center sm:justify-between sm:text-[20px]">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-[40px]">
            <Link to="/contact">Contact Us</Link>
            <span>|</span>
            <Link to="/privacy">Privacy policy</Link>
            <span>|</span>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
          <p className="text-[10px] font-semibold tracking-[-0.2px] sm:text-[16px] sm:tracking-[-0.32px]">
            © 2026 Lingowire Inc
          </p>
        </div>
        <div className="mt-4 flex justify-center gap-[12px] sm:mt-[40px] sm:justify-end">
          <img src={socialTiktok} alt="TikTok" className="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px]" />
          <img src={socialInstagram} alt="Instagram" className="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px]" />
          <img src={socialX} alt="X" className="h-[20px] w-[18px] sm:h-[24px] sm:w-[21px]" />
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

export { NavBar, Footer, AppStoreButtons };
