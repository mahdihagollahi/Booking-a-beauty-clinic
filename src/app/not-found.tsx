import React, { Fragment } from "react";
import Navbar from "../Component/Landing/Navbar";
import Image from "next/image";
import ErrorImage from "@/assent/Img/404.svg";
import ErrorArow from "@/assent/Img/404Arow.svg";
import Link from "next/link";
const notFound = () => {
  return (
    <Fragment>
      <div className="bg-white">
        <Navbar />
      </div>

      <div className="flex flex-col items-center justify-center">
        <Image src={ErrorImage} width={812} height={812} alt="" />
        <Link href="/" passHref>
          <button className="flex justify-center items-center  gap-2 text-[#DC1E7A] border border-[#DC1E7A] py-2 px-4">
            بازگشت به صفحه اصلی
            <Image src={ErrorArow} width={24} height={24} alt="" />
          </button>
        </Link>
      </div>
    </Fragment>
  );
};

export default notFound;
