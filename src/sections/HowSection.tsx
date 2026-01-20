import devices from "../assets/devices.svg";
import stepPractice from "../assets/step-practice.svg";
import stepConnect from "../assets/step-connect.svg";
import stepBelong from "../assets/step-belong.svg";

const steps = [
  {
    title: "Practice",
    copy: ["Prepare for real conversation", "with guided practice"],
    icon: stepPractice,
    className: "h-[68px] w-[120px] sm:h-[88px] sm:w-[160px]",
  },
  {
    title: "Connect",
    copy: ["Find and connect with partners", "who speak your language"],
    icon: stepConnect,
    className: "h-[52px] w-auto sm:h-[76px]",
  },
  {
    title: "Belong",
    copy: ["Take a language class or teach", "to grow your skills and community"],
    icon: stepBelong,
    className: "h-[56px] w-auto sm:h-[80px]",
  },
];

function HowSection() {
  return (
    <section className="bg-white py-[48px] sm:py-[80px]">
      <div className="mx-auto w-full max-w-[1276px] px-5 sm:px-0">
        <h2 className="text-center font-['Source_Sans_Pro'] text-[22px] font-semibold leading-[26px] text-[#223982] sm:text-[36px] sm:leading-[42px]">
          How It Works
        </h2>
        <div className="mt-6 flex flex-col items-center gap-10 sm:mt-[50px] sm:flex-row sm:items-start sm:gap-[120px]">
          <img src={devices} alt="App devices" className="w-full max-w-[260px] sm:max-w-[500px] drop-shadow-lg" />
          <div className="flex flex-col mt-10 ml-12 items-center gap-8 sm:items-start sm:gap-[60px]">
            {steps.map((step) => (
              <div className="flex items-center gap-4 sm:gap-6" key={step.title}>
                <img src={step.icon} alt="" className={step.className} />
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

export default HowSection;
