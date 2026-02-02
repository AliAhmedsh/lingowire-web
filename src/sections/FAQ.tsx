import { useState } from "react";
import faqBubble from "../assets/faq-bubble.svg";
import faqCharacter from "../assets/faq-character.svg";

const faqs = [
  {
    question: "What is Lingowire?",
    answer:
      "Lingowire connects language learners with guided practice, live partners, and community sessions so you actually speak the language, not just memorize words.",
  },
  {
    question: "Is Lingowire free?",
    answer:
      "Yes. Core practice features are free. Premium features like advanced feedback and instructor-led groups are optional upgrades.",
  },
  {
    question: "Who can join?",
    answer:
      "Beginners to advanced speakers are welcome. You can find partners at any level.",
  },
  {
    question: "Can I teach on Lingowire?",
    answer:
      "Qualified community members can host sessions and earn through paid practice or group conversations after verification.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-[48px] sm:py-[80px]">
      <div className="mx-auto w-full max-w-[1513px] px-5 sm:px-0">
        <div className="flex items-center gap-3 sm:hidden">
          <div className="flex flex-col items-center gap-1">
            <img src={faqBubble} alt="FAQ bubble" className="h-[40px] w-[40px]" />
            <img src={faqCharacter} alt="FAQ character" className="h-[52px] w-auto" />
          </div>
          <div className="flex justify-center">
            <h2 className="ml-4 whitespace-nowrap text-left font-['Source_Sans_Pro'] text-[32px] font-semibold leading-[38px] text-[#223982] md:text-[40px] md:leading-[44px]">
              Frequently Asked
              <br />
              Questions
            </h2>
          </div>
        </div>
        <h2 className="hidden text-center font-['Source_Sans_Pro'] text-[32px] font-semibold leading-[38px] text-[#223982] sm:block md:text-[40px] md:leading-[44px]">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 flex flex-col items-center gap-5 sm:mt-[40px] sm:flex-row sm:items-start sm:justify-between sm:gap-[40px] sm:px-[50px]">
          <div className="relative hidden w-[280px] flex-col items-center sm:flex sm:w-[400px]">
            <img
              src={faqBubble}
              alt=""
              className="h-[180px] w-[200px] mb-[-28px] sm:h-[220px] sm:w-[240px] sm:mb-[-36px]"
            />
            <img src={faqCharacter} alt="" className="h-[220px] w-auto sm:h-[240px]" />
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

export default FAQ;
