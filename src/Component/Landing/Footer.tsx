import React from "react";
import Image from "next/image";
import IconImage from "@/assent/Img/Landing/Vector.svg";
import instagramImage from "@/assent/Img/Landing/instagram.svg";
import PhoneImage from "@/assent/Img/Landing/Phone.svg";
import LocationImage from "@/assent/Img/Landing/Location.svg";
import Link from "next/link";
const Footer = () => {
  return (
    <div className=" md:relative md:z-10">
      <div className="md:flex md:px-20 md:py-6 md:items-center md:bg-white  ">
        <Link href="/">
          <div className="flex items-center gap-3 mt-5 mr-40 md:mt-0 md:mr-0">
            <Image src={IconImage} width={30} height={30} alt="logo" />
            <h2 className="font-bold text-xl text-[#DC1E7A]">نورانید</h2>
          </div>
        </Link>
        <div className=" hidden md:flex  gap-20 mr-40 items-center ">
          <Link href="/">
            <button className="  cursor-pointer">
              <p className="w-20  font-extrabold text-base whitespace-nowrap text-[#8F8F8F] hover:w-[77px]  ">
                صفحه اصلی
              </p>
            </button>
          </Link>

          <Link href="/Service">
            <button className="  cursor-pointer">
              <p className="w-[76px]  font-extrabold text-base whitespace-nowrap text-[#8F8F8F] ">
                خدمات نورانید
              </p>
            </button>
          </Link>

          <Link href="/Doctors">
            <button className="  cursor-pointer">
              <p className="w-[81px] font-extrabold text-base whitespace-nowrap text-[#8F8F8F] ">
                پزشکان نورانید
              </p>
            </button>
          </Link>

          <Link href="/Article">
            <button className="  cursor-pointer">
              <p className="w-9 font-extrabold text-base whitespace-nowrap text-[#8F8F8F] ">
                مقالات
              </p>
            </button>
          </Link>

          <Link href="/AboutUs">
            <button className="  cursor-pointer">
              <p className="w-14  font-extrabold text-base whitespace-nowrap text-[#8F8F8F] ">
                تماس با ما
              </p>
            </button>
          </Link>
        </div>
        <div className="mr-44 hidden  md:flex gap-2 ">
          <button className="">
            <Image
              src={instagramImage}
              width={50}
              height={50}
              alt=""
              className=""
            />
          </button>

          <button className="">
            <Image
              src={PhoneImage}
              width={50}
              height={50}
              alt=""
              className=""
            />
          </button>

          <button className="">
            <Image
              src={LocationImage}
              width={50}
              height={50}
              alt=""
              className=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
