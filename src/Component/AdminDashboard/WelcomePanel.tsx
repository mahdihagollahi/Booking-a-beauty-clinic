import React, { useState, useEffect } from "react";
import Image from "next/image";
import out from "@/assent/Img/ImageIconPanelAdmin/logout.svg";
import massege from "@/assent/Img/ImageIconPanelAdmin/messages-2.svg";

const WelcomePanel = () => {


  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);



  return (
    <div className="w-96 h-16 p-3 rounded-md flex flex-row justify-between shadow-md ">
      <div className="flex flex-row gap-3">
        <Image width={24} height={24} src={massege} alt="" />
        <Image width={24} height={24} src={out} alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <span>
          به پنل<span className="text-[#DC1E7A]"> نورانید</span> خوش آمدید
        </span>
        <span className="text-[#8F8F8F]">{currentDateTime.toLocaleDateString()} - {currentDateTime.toLocaleTimeString()}</span>
      </div>
    </div>
  );
};
export default WelcomePanel;
