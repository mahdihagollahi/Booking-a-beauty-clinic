import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import loginButton from "@/assent/Img/Landing/user.svg";

function NavbarResponsive({ pathName, handleOpenModal , toggleMenu }) {
  return (
    <Fragment>
      <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-20 transform transition-transform duration-300">
        <div className="flex flex-col mt-20 space-y-4 px-4">
          <Link href="/">
            <button
              className={`text-lg font-extrabold ${
                pathName === "/" ? "text-[#4BB09C]" : "text-[#8F8F8F]"
              }`}
              onClick={toggleMenu}
            >
              صفحه اصلی
            </button>
          </Link>
          <Link href="/Service">
            <button
              className={`text-lg font-extrabold ${
                pathName === "/Service" ? "text-[#4BB09C]" : "text-[#8F8F8F]"
              }`}
              onClick={toggleMenu}
            >
              خدمات نورانید
            </button>
          </Link>
          <Link href="/Doctors">
            <button
              className={`text-lg font-extrabold ${
                pathName === "/Doctors" ? "text-[#4BB09C]" : "text-[#8F8F8F]"
              }`}
              onClick={toggleMenu}
            >
              پزشکان نورانید
            </button>
          </Link>
          <Link href="/Article">
            <button
              className={`text-lg font-extrabold ${
                pathName === "/Article" ? "text-[#4BB09C]" : "text-[#8F8F8F]"
              }`}
              onClick={toggleMenu}
            >
              مقالات
            </button>
          </Link>
          <Link href="/AboutUs">
            <button
              className={`text-lg font-extrabold ${
                pathName === "/AboutUs" ? "text-[#4BB09C]" : "text-[#8F8F8F]"
              }`}
              onClick={toggleMenu}
            >
              تماس با ما
            </button>
          </Link>
          {/* دکمه ورود/ثبت‌نام در منوی همبرگری */}
          <button
            className="flex gap-2 bg-[#DC1E7A] rounded-md py-2 px-4 whitespace-nowrap mt-4"
            onClick={() => {
              handleOpenModal();
              toggleMenu();
            }}
          >
            <Image src={loginButton} width={20} height={20} alt="" />
            <p className="font-medium text-[#FFFFFF] text-sm pl-4">
              ورود / ثبت نام
            </p>
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default NavbarResponsive;
