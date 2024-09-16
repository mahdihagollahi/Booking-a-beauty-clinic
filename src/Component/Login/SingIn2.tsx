import React, { Fragment } from "react";
import Image from "next/image";
import LoginImage from "@/assent/Img/Login/LognModal.svg";
import IconImage from "@/assent/Img/Landing/Vector.svg";
function SingIn2() {
  return (
    <Fragment>
      <div className=" flex justify-center items-center mt-[15%]">
        <div className="px-10 py-10  pb-32 rounded-r-[4.5%] "
        style={{backgroundImage: `url(${LoginImage.src})`,
          backgroundSize: 'cover',
        }}
        
        >
          <div className="flex items-center justify-center gap-3 mt-10">
            <Image src={IconImage} width={30} height={30} alt="logo" />
            <h2 className="font-bold text-xl text-[#DC1E7A]">نورانید</h2>
          </div>

          <p
            className="font-medium text-center mb-6 mt-32 ml-[60%] text-white whitespace-nowrap"
            style={{ display: "inline-block" }}
          >
            آیا حساب کاربری دارید ؟
            <span className="text-[#4BB09C] mr-2 cursor-pointer">
              وارد شوید
            </span>
          </p>

          <input
            type="text"
            placeholder="09192803715"
            className="w-full p-4 mb-4 border border-gray-300 rounded-lg mt-4"
          />

          <button className="w-full bg-[#DC1E7A]  text-white py-4 rounded-lg mt-36 ">
           ورود
          </button>
        </div>
       
      </div>
    </Fragment>
  );
}

export default SingIn2;












