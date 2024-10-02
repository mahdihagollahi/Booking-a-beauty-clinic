import React, { Fragment } from "react";
import Image from "next/image";
import UpLeft from "@/assent/Img/AboutUs/UpLeft.svg";
import UpRight from "@/assent/Img/AboutUs/UpRight.svg";
import DownLeft from "@/assent/Img/AboutUs/DownLeft.svg";
import DownRight from "@/assent/Img/AboutUs/DownRight.svg";
const AboutUsPicture = () => {
  return (
    <Fragment>
      <div className="pl-32 duration-300">
        <div className="flex gap-4 ">
          <Image src={UpRight} width={435} height={217} alt="" />

          <Image src={UpLeft} width={247} height={217} alt="" />
        </div>
        <div className="flex mt-5 gap-4 ">
          <Image src={DownRight} width={247} height={217} alt="" />

          <Image src={DownLeft} width={435} height={217} alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUsPicture;
