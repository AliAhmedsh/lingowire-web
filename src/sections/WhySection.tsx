import featureSpeak from "../assets/feature-speak.svg";
import featureConnect from "../assets/feature-connect.svg";
import featureGlobe from "../assets/feature-globe.svg";

const features = [
  {
    title: "Speaking a language confidently requires actual practice.",
    icon: featureSpeak,
  },
  {
    title: "Lingowire connects you with practice partners and groups.",
    icon: featureConnect,
  },
  {
    title: "We support all spoken languages leaving no language behind.",
    icon: featureGlobe,
  },
];

function WhySection() {
  return (
    <section className="bg-white py-[48px] sm:py-[80px]">
      <div className="mx-auto w-full max-w-[1276px] px-5 sm:px-0">
        <h2 className="text-center font-['Source_Sans_Pro'] text-[20px] font-semibold leading-[24px] text-[#223982] sm:text-[40px] sm:leading-[44px]">
          Why Lingowire?
        </h2>
        <div className="mt-6 flex flex-col items-center gap-5 sm:mt-[60px] sm:flex-row sm:justify-center sm:gap-[50px]">
          {features.map((item) => (
            <div
              className="flex h-[200px] w-full max-w-[320px] flex-col items-center gap-3 rounded-[18px] bg-[#223982] px-[12px] py-[18px] text-center text-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] sm:h-[339px] sm:w-[372px] sm:gap-6 sm:rounded-[20px] sm:px-[20px] sm:py-[60px]"
              key={item.title}
            >
              <img src={item.icon} alt="" className="h-[64px] w-[64px] sm:h-[123px] sm:w-[123px]" />
              <p className="text-[15px] leading-[22px] sm:text-[26px] sm:leading-[30px]">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhySection;
