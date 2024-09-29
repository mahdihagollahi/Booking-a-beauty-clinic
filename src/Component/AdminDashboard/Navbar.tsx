import React from "react";
import Image from "next/image";
import noranid from "@/assent/Img/ImageIconPanelAdmin/Vector.svg";
import ButtonNavbar from "./ButtonNavbar";
const Navbar = () => {
  return (
    <>
      <div className="w-48 rounded-md pt-7 pb-14 bg-white shadow-md">
        <div className="flex flex-row gap-2 justify-center mb-7 ">
          <Image src={noranid} alt="" />
          <span className="text-[#DC1E7A] font-bold text-lg	">نورانید</span>
        </div>
        <ButtonNavbar/>
      </div>
    </>
  );
};
export default Navbar;
