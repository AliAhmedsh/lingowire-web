import heroRight from "../assets/hero-right.svg";
import qr from "../assets/qr.svg";
import { AppStoreButtons } from "../components/Layout";

function Hero() {
  return (
    <section className="bg-[#223982] -mt-4">
      <div className="mx-auto flex w-full max-w-[1417px] flex-col-reverse items-center justify-between gap-8 px-5 pb-10 pt-8 text-center sm:h-[650px] sm:flex-row sm:gap-0 sm:px-[50px] sm:pb-0 sm:pt-0 sm:text-left">
        <div className="max-w-[601px] text-white">
          <h1 className="font-['Source_Sans_Pro'] text-[30px] font-semibold leading-[36px] sm:text-[64px] sm:leading-[76px]">
            Speak your Language
            <br />
            with Confidence
          </h1>
          <p className="mt-4 text-[12px] leading-[16px] sm:mt-5 sm:text-[24px] sm:leading-[28px]">
            Connect with practice partners, have real conversations, and grow your fluency through community.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:mt-10 sm:items-start sm:gap-6">
            <AppStoreButtons />
          </div>
        </div>
        <div className="relative flex h-[300px] w-full max-w-[260px] items-center justify-center sm:h-[580px] sm:w-[640px] sm:max-w-none">
          <img src={heroRight} alt="Lingowire hero" className="absolute inset-0 h-full w-full object-contain" />
          <div className="absolute bottom-2 left-2 hidden w-[220px] items-center gap-4 rounded-[20px] bg-white p-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] sm:bottom-6 sm:-left-8 sm:flex sm:w-[300px] sm:gap-5">
            <img src={qr} alt="QR code to download" className="h-[60px] w-[60px] sm:h-[80px] sm:w-[80px]" />
            <span className="font-['Source_Sans_Pro'] text-[14px] leading-[18px] text-[#223982] sm:text-[24px] sm:leading-[28px]">
              Scan to download
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
