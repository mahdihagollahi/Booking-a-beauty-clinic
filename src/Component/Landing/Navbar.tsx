"use client";
import React, { useState } from "react";
import Image from "next/image";
import IconImage from "@/assent/Img/Landing/Vector.svg";
import loginButton from "@/assent/Img/Landing/user.svg";
import Modal from "./Modal";
import SingIn from "../SingIn/SingIn";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathName = usePathname();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="relative z-10">
      <div className="flex px-20 py-6 items-center">
        <Link href="/">
          <div className="flex items-center cursor-pointer gap-3">
            <Image src={IconImage} width={30} height={30} alt="logo" />
            <h2 className="font-bold text-xl text-[#DC1E7A]">نورانید</h2>
          </div>
        </Link>
        <div className="flex gap-20 mr-60 items-center">
          <Link href="/">
            <button className="cursor-pointer">
              <span
                style={pathName === "/" ? { color: "#4BB09C" } : {}}
                className={`w-20 font-extrabold text-base whitespace-nowrap 
    ${
      pathName === "/"
        ? "border-b-4 border-[#4BB09C] pb-[2px] mt-[1px] duration-300"
        : "text-[#8F8F8F]"
    }
    hover:w-[77px] hover:text-[#4BB09C] hover:border-b-4 hover:border-[#4BB09C] hover:pb-[2px] hover:mt-[1px] duration-300`}
              >
                صفحه اصلی
              </span>
            </button>
          </Link>

          <Link href="/Service">
            <button className="cursor-pointer">
              <span
                style={pathName === "/Service" ? { color: "#4BB09C" } : {}}
                className={`w-[76px] font-extrabold ${
                  pathName === "/Service"
                    ? "border-b-4 border-[#4BB09C] pb-[2px] mt-[1px] w-[87px] duration-300"
                    : "text-[#8F8F8F]"
                } text-base whitespace-nowrap text-[#8F8F8F] hover:w-[87px] hover:text-[#4BB09C] hover:border-b-4 hover:border-[#4BB09C] hover:pb-[2px] hover:mt-[1px] duration-300`}
              >
                خدمات نورانید
              </span>
            </button>
          </Link>

          <Link href="/Doctors">
            <button className="cursor-pointer">
              <p
                style={pathName === "/Doctors" ? { color: "#4BB09C" } : {}}
                className={`w-[81px] font-extrabold ${
                  pathName === "/Doctors"
                    ? "border-b-4 border-[#4BB09C] pb-[2px] mt-[1px] w-[88px] duration-300"
                    : "text-[#8F8F8F]"
                } text-base whitespace-nowrap text-[#8F8F8F] hover:w-[88px] hover:text-[#4BB09C] hover:border-b-4 hover:border-[#4BB09C] hover:pb-[2px] hover:mt-[1px] duration-300`}
              >
                پزشکان نورانید
              </p>
            </button>
          </Link>

          <Link href="/Article">
            <button className="cursor-pointer">
              <p
                style={pathName === "/Article" ? { color: "#4BB09C" } : {}}
                className={`w-9 font-extrabold ${
                  pathName === "/Article"
                    ? "border-b-4 border-[#4BB09C] pb-[2px] mt-[1px] w-[40px] duration-300"
                    : "text-[#8F8F8F]"
                } text-base whitespace-nowrap text-[#8F8F8F] hover:w-10 hover:text-[#4BB09C] hover:border-b-4 hover:border-[#4BB09C] hover:pb-[2px] hover:mt-[1px] duration-300`}
              >
                مقالات
              </p>
            </button>
          </Link>

          <Link href="/AboutUs">
            <button className="cursor-pointer">
              <p
                style={pathName === "/AboutUs" ? { color: "#4BB09C" } : {}}
                className={`w-14 font-extrabold text-base ${
                  pathName === "/AboutUs"
                    ? "border-b-4 border-[#4BB09C] pb-[2px] mt-[1px] w-[70px] duration-300"
                    : "text-[#8F8F8F]"
                } whitespace-nowrap text-[#8F8F8F] hover:w-[70px] hover:text-[#4BB09C] hover:border-b-4 hover:border-[#4BB09C] hover:pb-[2px] hover:mt-[1px] duration-300`}
              >
                تماس با ما
              </p>
            </button>
          </Link>
        </div>
        <div className="mr-44">
          <button
            className="flex gap-2 bg-[#DC1E7A] rounded-md py-2 px-4 whitespace-nowrap"
            onClick={handleOpenModal}
          >
            <Image src={loginButton} width={20} height={20} alt="" />
            <p className="font-medium text-[#FFFFFF] text-sm pl-4">
              ورود / ثبت نام
            </p>
          </button>
        </div>
        <Modal isVisible={isModalVisible} handleCloseModal={handleCloseModal}>
          <SingIn handleCloseModal={handleCloseModal} />
        </Modal>
      </div>
    </div>
  );
}

export default Navbar;
