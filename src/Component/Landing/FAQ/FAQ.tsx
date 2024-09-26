"use client";
import React, { Fragment, useState } from "react";
import Background from "@/assent/Img/Landing/FAQBG.svg";
import CreamImage from "@/assent/Img/Landing/CreamFAQ.svg";
import Image from "next/image";
import FAQData from "./FAQData";
import IconDown from "@/assent/Img/Landing/arrowDownFAQ.svg";

const FAQ = () => {
  const Data = FAQData().faqData;

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Fragment>
      <div
        className="px-20 w-[100%] h-[63%] py-10 relative"
        style={{
          backgroundImage: `url(${Background.src})`,
          zIndex: "1",
          position: "relative",
        }}
      >
        <p className="font-medium text-xl text-[#393939]">سوالات متدوال</p>

        <div className="flex justify-between overflow-y-scroll mt-10 items-center">
          {/* FAQ Section */}
          <div className="relative" style={{ zIndex: "2" }}>
            {Data.map((faq) => (
              <div key={faq.id} className="mb-6 overflow-y-scroll"
              style={{   animationDuration: '300ms'}}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="text-[#393939] rounded-xl w-[633px] p-4 border border-[#00000014] font-medium duration-300 flex items-center text-xl justify-between mt-2"
                  style={{   animationDuration: '300ms'}}
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
                    style={{   animationDuration: '300ms'}}
                  />
                </button>
                {openIndex === faq.id && (
                  <div
                    className="bg-white rounded-md w-[590px]  py-4 px-4 text-right  duration-300"
                    style={{
                      maxHeight: "200px",
                      overflowY: "scroll",
                      zIndex: "0",
                      animationDuration: '300ms'
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
      <div className="mr-[73%] -mt-96 absolute" style={{ zIndex: "60" }}>
        <Image src={CreamImage} width={289} height={310} alt="" className="" />
      </div>
    </Fragment>
  );
};

export default FAQ;
