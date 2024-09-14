import React, { Fragment } from "react";
import Image from "next/image";
import WomenWhyUs from "@/assent/Img/Landing/WhyUsWomen.svg";
import ExperienceWhyUs from "@/assent/Img/Landing/ExperienceWhyUs.svg";
import ServiceWhyUs from "@/assent/Img/Landing/ServiceWhyUs.svg";
import HealthyWhyUs from "@/assent/Img/Landing/HealthyWhyUs.svg";
import MaterialWhyUs from "@/assent/Img/Landing/MaterialWhyUs.svg";
import Flower from "@/assent/Img/Landing/flower.svg";
function WhyMe() {
  return (
    <Fragment>
      <div className="bg-inherit mt-6 relative ">
        <p className="mr-20  font-medium text-xl text-[#393939] ">
          چرا کلینیک نورانید
        </p>
        <div className="mr-[15%] top-[2.5%] -z-1  absolute">
          <Image src={ExperienceWhyUs} width={356} height={380} alt="" />
        </div>

        <div className="mr-[58%] top-[2.5%] z-10  absolute">
          <Image src={HealthyWhyUs} width={356} height={380} alt="" />
        </div>

        <div className=" mr-[38.9%] top-[10%] absolute">
          <Image src={Flower} width={52} height={58} alt="" />
        </div>

        <div className="mr-[35%] -mt-[2%] relative z-10">
          <Image src={WomenWhyUs} width={400} height={480} alt="" />
        </div>

        <div className="mr-[12%] top-[50%] -z-1  absolute">
          <Image src={ServiceWhyUs} width={356} height={380} alt="" />
        </div>
        <div className=" mr-[56.5%] top-[25%] -z-1  absolute">
          <Image src={Flower} width={52} height={58} alt="" />
        </div>

        <div className="mr-[64%] top-[50%] -z-0  absolute">
          <Image src={MaterialWhyUs} width={356} height={380} alt="" />
        </div>

        <div className=" mr-[38.9%] top-[94.8%] -z-1  absolute">
          <Image src={Flower} width={52} height={58} alt="" />
        </div>

        <div className="  top-[113%] -z-9  absolute">
          <Image src={Flower} width={52} height={58} alt="" />
        </div>

        <div className=" mr-[96.9%] top-[113.8%] -z-1  absolute">
          <Image src={Flower} width={52} height={58} alt="" />
        </div>
      </div>
    </Fragment>
  );
}

export default WhyMe;
