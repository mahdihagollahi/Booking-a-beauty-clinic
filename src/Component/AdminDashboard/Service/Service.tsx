import React, { Fragment } from "react";
import WelcomePanel from "@/Component/AdminDashboard/Dashboard/HeaderDashboard";
import NavbarDashboard from "@/Component/AdminDashboard/Navbar/NavbarDashboard";
import Image from "next/image";
import AddImage from "@/assent/Img/AdminDashboard/add.svg";
import ServiceTable from "./ServiceTable";
import Link from "next/link";
const Service = () => {
  return (
    <Fragment>
      <WelcomePanel />

      <div>
        <NavbarDashboard />
      </div>

      <div className="w-[73.5%] h-[118.5%] shadow  rounded-2xl py-6 px-4  mr-80 -mt-[67.5%] bg-white ml-72">
        <div className="flex gap-[80%] items-center">
          <p className="font-medium text-xl text-[#393939]">خدمات</p>
          <Link href='/AdminDashboard/Service/AddService'>
          <button className="bg-[#5DD9C1] text-white flex items-center gap-2 px-4 py-2 w-36 h-10 rounded-lg">
           
            <p className="font-medium text-base whitespace-nowrap">
              افزودن خدمات
            </p>
            <Image src={AddImage} width={24} height={24} alt="" />

          </button>
          </Link>
        </div>
        <ServiceTable/>
      </div>
    </Fragment>
  );
};

export default Service;
