import React, { Fragment } from "react";
import Image from "next/image";
import Call from "@/assent/Img/AboutUs/Call.svg";
import instagram from "@/assent/Img/AboutUs/instagram.svg";
import timer from "@/assent/Img/AboutUs/timer.svg";
import location from "@/assent/Img/AboutUs/location.svg";
import { Interface } from "readline";

interface Contact {
  id: number;
  image: null;
  discription: string;
}
const ContactUs = () => {
  const ContactUs: Contact[] = [
    {
      id: 1,
      image: Call,
      discription: "شماره تماس : ۰۲۱-۲۸۴۲۴۳۶۸ و ۰۹۲۰۳۲۳۲۳۰۸",
    },
    {
      id: 2,
      image: timer,
      discription: "ساعت کاری : 10 صبح تا 10 شب",
    },

    {
      id: 3,
      image: instagram,
      discription: 'اینستاگرام : Noranid_849@',
    },

    {
      id: 4,
      image: location,
      discription:
        "آدرس : خیابان گیلان شرقی، کوچه موحد دوم، بن بست سمند عربی، ساختمان کاویان، پلاک ۴, واحد ۴ جنوبی ",
    },
  ];
  return (
    <Fragment>
      <p className="font-medium text-[22px] text-[#DC1E7A]">
        راه های ارتباط با نورانید
      </p>
      {ContactUs.map((items) => (
        <div key={items.id} className="flex w-[66%]  gap-3 items-center mt-10 ">
          <Image src={items.image}
          width={22}
          height={22}
          alt=""
          />
          <p>
            {items.discription}
          </p>
        </div>
      ))}
    </Fragment>
  );
};

export default ContactUs;
