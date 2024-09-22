"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import Logo from "@/assent/Img/UserDashboard/Logo.svg";
import LogOut from "@/assent/Img/UserDashboard/logout.svg";
import UserProfile from "@/assent/Img/UserDashboard/UserProfile.svg";
import NavbarData from "./NavbarData";
import Link from "next/link";
const Navbar = () => {
  const navbar = NavbarData().Navbar;
  const [hoverImage, setHoverImage] = useState<{ [key: number]: boolean }>({});
  const [clickedItems, setClickedItems] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    setHoverImage((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id: number) => {
    setHoverImage((prev) => ({ ...prev, [id]: false }));
  };

  const handelClick = (id: number) => {
    setClickedItems(id);
  };

  return (
    <Fragment>
      <div className="bg-[#EA78AF]  w-60 py-10 h-full rounded-l-[50px]">
        <div className="flex items-center gap-2 justify-center">
          <Image src={Logo} width={30} height={30} alt="" />

          <p className="font-bold text-xl text-[#FFFFFF]">نورانید</p>
        </div>
        <div className="flex items-center mt-20 gap-3 justify-center">
          <div>
            <Image src={UserProfile} width={60} height={60} alt="" />
          </div>

          <div>
            <p className="font-medium text-base text-[#FFFFFF]">
              محدثه حاجی زاده
            </p>
            <p
              className="font-regular ml-2 mt-1 text-base text-[#FFFFFF]"
              style={{ direction: "ltr" }}
            >
              0923 209 3249
            </p>
          </div>
        </div>
        <div>
          <div className="mt-20 px-5 flex flex-col gap-10 ">
            {navbar.map((items, index) => (
              <div
                key={index}
                className={`bg-inherit rounded-r-lg py-2 px-1 w-[111%] ${
                  hoverImage[items.id] || clickedItems == items.id
                    ? " border-r-2 bg-pink-100 border-[#DC1E7A] rounded-md"
                    : "bg-[#DC1E7A]"
                } hover:bg-[#FCE9F2] hover:border-r-2 hover:border-[#DC1E7A] hover:rounded-md `}
                onMouseEnter={() => handleMouseEnter(items.id)}
                onMouseLeave={() => handleMouseLeave(items.id)}
                onClick={() => handelClick(items.id)}
              >
                <Link href={items.link} passHref>
                  <div className="flex items-center gap-3  ">
                    <Image
                      src={
                        hoverImage[items.id] || clickedItems === items.id
                          ? items.imageHover
                          : items.image
                      }
                      width={24}
                      height={24}
                      alt=""
                    />
                    <p
                      className={`font-demiBold   whitespace-nowrap text-base ${
                        hoverImage[items.id] || clickedItems === items.id
                          ? "text-[#DC1E7A] "
                          : "text-[#FFFFFF]"
                      } `}
                    >
                      {items.title}
                    </p>
                  </div>
                </Link>
              </div>
            ))}

            <button className="flex items-center mt-20 rounded-r-lg py-2 px-1 w-[111%] gap-3 text-[#DC1E7A] bg-[#FCE9F2]  border-r-2 border-[#DC1E7A] rounded-md">
              <Image src={LogOut} width={24} height={24} alt="" />
              خروج از حساب کاربری
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
