"use client";
import React, { Fragment, useState } from "react";
import Background from "@/assent/Img/Landing/FAQBG.svg";
import CreamImage from "@/assent/Img/Landing/CreamFAQ.svg";
import Image from "next/image";
import FAQData from "./FAQData";
import IconDown from "@/assent/Img/Landing/arrowDownFAQ.svg";
import Flower from "@/assent/Img/Landing/flower.svg";
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ:React.FC = () => {
  const Data: FAQItem[] = FAQData().faqData;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Fragment>
    
      <div
        className="px-20 w-[100%] h-[63%] py-10 relative"
        style={{
          backgroundImage: `url(${Background.src})`,
          zIndex: "10",
          position: "relative",
          overflow: "hidden", 
        }}
      >
        <p className="font-medium text-xl text-[#393939]">سوالات متدوال</p>

        <div className="flex flex-col  mt-10 items-center">
          <div className="w-[50%] -mr-[50%] ">
            {Data.map((faq) => (
              <div
                key={faq.id}
                className="mb-6  relative"
                style={{ zIndex: "5", position: "relative" }}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="text-[#393939] rounded-xl w-full p-4 border border-[#00000014] font-medium duration-300 flex items-center text-xl justify-between mt-2"
                  style={{ zIndex: "6", position: "relative" }}
                >
                  <div>{faq.question}</div>
                  <Image
                    src={IconDown}
                    width={20}
                    height={20}
                    alt="Toggle Replies Icon"
                    className={`transform transition-transform duration-300 ${
                      openIndex === faq.id ? "rotate-0" : "-rotate-180"
                    }`}
                  />
                </button>
                {openIndex === faq.id && (
                  <div
                    className="bg-white rounded-md w-full py-4 px-4 text-right duration-300"
                    style={{
                      maxHeight: "200px", 
                      overflowY: "auto", 
                      zIndex: "4", 
                    }}
                  >
                    <p className="font-regular text-[#8F8F8F] text-lg">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

   
      <div className="mr-[73%] -mt-96 absolute" style={{ zIndex: "15" }}>
        <Image src={CreamImage} width={289} height={310} alt="" />
      </div>

      <div className=" absolute mr-[26.9%] ">
        <Image src={Flower} width={52} height={58} alt="" />
      </div>
    </Fragment>
  );
};

export default FAQ;

