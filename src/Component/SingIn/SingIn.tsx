import React, { useState } from "react";
import Image from "next/image";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import LoginImage from "@/assent/Img/Login/LognModal.svg";
import IconImage from "@/assent/Img/Landing/Vector.svg";
import IconClose from "@/assent/Img/Login/closeIcon.svg";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

interface SingInProps {
  handleCloseModal: () => void;
}

const SingIn: React.FC<SingInProps> = ({ handleCloseModal }) => {
  const [isOTPVisible, setIsOTPVisible] = useState(false); 
  const [buttonText, setButtonText] = useState("دریافت کد"); 

  const handleFocus = () => {
    document.documentElement.lang = "en";
  };

  const handleButtonClick = () => {
    setIsOTPVisible(true); 
    setButtonText("ارسال کد"); 
  };

  return (
    <div className="flex justify-center items-center mt-[15%] relative z-50">
      <div
        className={`px-10 py-3 pb-32 rounded-r-[4.5%] ${
            isOTPVisible ? "w-full " : "w-[90%] "
          } rounded-l-[4.5%]`}
        style={{
          backgroundImage: `url(${LoginImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <Image
            src={IconClose}
            width={24}
            height={24}
            alt="close"
            onClick={handleCloseModal}
            className="mr-[100%] mb-10 cursor-pointer"
          />
        </div>
        <div className="flex items-center justify-center gap-3 mt-10">
          <Image src={IconImage} width={30} height={30} alt="logo" />
          <h2 className="font-bold text-xl text-[#DC1E7A]">نورانید</h2>
        </div>

        <p
          className="font-medium text-center mb-6 mt-32 text-white"
          style={{ display: "inline-block" }}
        >
          آیا حساب کاربری دارید؟{" "}
          <span className="text-[#4BB09C] cursor-pointer">وارد شوید</span>
        </p>

        <input
          type="text"
          placeholder="09192803715"
          className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
          onFocus={handleFocus}
        />

      
        {isOTPVisible && (
         
        <InputOTP
          className=""
          maxLength={4}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        >
          <InputOTPGroup
            className="text-white mr-10 my-2  "
            style={{ direction: "ltr" }}
          >
            <InputOTPSlot className="mr-8 rounded" index={0} />
            <InputOTPSlot className="mr-8 rounded border border-white" index={1} />
            <InputOTPSlot className="mr-8 rounded border border-white" index={2} />
            <InputOTPSlot className="mr-8 rounded border border-white" index={3} />
          </InputOTPGroup>
        </InputOTP>
        )}

       
        <button
          className={`w-full bg-[#DC1E7A] text-white py-4 rounded-lg mt-4 ${
            isOTPVisible ? "mt-4 " : "mt-[10%] "
          }`}
          onClick={handleButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default SingIn;

