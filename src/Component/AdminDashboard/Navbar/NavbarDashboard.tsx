"use client";
import React, { Fragment, useState } from "react";
import NavbarData from "./NavbarData";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "@/assent/Img/AdminDashboard/Logo.svg";
const NavbarDashboard = () => {
  const [hoverImage, setHoverImage] = useState<{ [key: number]: boolean }>({});
  const [clickedImage, setClickedImage] = useState<number | null>(null);
  const Data = NavbarData().Navbar;
  const pathName = usePathname();

  const handleMouseEnter = (id: number) => {
    setHoverImage((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id: number) => {
    setHoverImage((prev) => ({ ...prev, [id]: false }));
  };

  const handleClick = (id: number) => {
    setClickedImage(id);
    setHoverImage((prev) => ({ ...prev, [id]: true }));
    localStorage.setItem("clickedImage", id.toString());
  };

  return (
    <Fragment>
      <div className="mr-20 py-5 h-[120%] my-3 mt-5 w-52 rounded-2xl bg-white shadow ">
        <div className="flex justify-center mb-5">
          <Link href='/AdminDashboard/Dashboard'>
         
          <div className="flex items-center gap-2 ">
            <Image src={Logo} width={30} height={30} alt="" />
            <p className="font-bold text-xl text-[#DC1E7A]">نورانید</p>
          </div>
          </Link>
        </div>

        <div className=" flex flex-col gap-8">
          {Data.map((items) => (
            <Link key={items.id} href={items.link}>
              <div
                className={` group flex w-48 ${
                  pathName === items.link
                    ? "border-r-4 border-[#DC1E7A] text-customPink"
                    : hoverImage[items.id] || clickedImage === items.id
                    ? "border-r-4 border-[#DC1E7A] text-customPink"
                    : "text-[#393939]"
                } hover:border-r-4 hover:border-[#DC1E7A] hover:text-[#DC1E7A] h-9 px-4 py-1 flex-row gap-2`}
                onMouseEnter={() => handleMouseEnter(items.id)}
                onMouseLeave={() => handleMouseLeave(items.id)}
                onClick={() => handleClick(items.id)}
              >
                <Image
                  width={24}
                  height={24}
                  src={
                    pathName === items.link
                      ? items.hoverSrc
                      : hoverImage[items.id] || clickedImage === items.id
                      ? items.hoverSrc
                      : items.src
                  }
                  alt=""
                />
                <span
                  className={`text-[#565656] flex items-center mt-1 ${
                    pathName === items.link
                      ? " text-customPink"
                      : hoverImage[items.id] || clickedImage === items.id
                      ? " text-customPink"
                      : "text-[#393939]"
                  } group-hover:text-[#DC1E7A] font-medium`}
                >
                  {items.text}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default NavbarDashboard;
