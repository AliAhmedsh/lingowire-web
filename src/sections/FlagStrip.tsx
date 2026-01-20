import flags from "../assets/flags.svg";

function FlagStrip() {
  return (
    <div className="bg-white mt-12">
      <div className="flag-marquee mx-auto h-[24px] w-full max-w-[1480px] sm:h-[39px]">
        <div className="flag-track h-full">
          <img src={flags} alt="Country flags" className="h-full w-auto object-cover" />
          <img src={flags} alt="Country flags duplicate" className="h-full w-auto object-cover" aria-hidden />
        </div>
      </div>
    </div>
  );
}

export default FlagStrip;
