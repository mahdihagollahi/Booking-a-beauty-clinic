import React, { Fragment } from "react";
import Image from "next/image";
import AddDoctor from "@/assent/Img/AdminDashboard/Accept.svg";
const AcceptChangeModal = ({ handleCloseModal }) => {
  return (
    <Fragment>
      <div onClick={handleCloseModal} className="flex justify-center mt-[15%]">
        <div className="bg-white rounded-lg w-72 h-[361px]">
          <div className="mr-[124px] mt-24">
            <Image src={AddDoctor} width={50} height={50} alt="" />
          </div>
          <p className="mt-10 mr-9 font-medium text-[#292C2C] text-lg">
            تغییرات با موفقیت اعمال شد !
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default AcceptChangeModal;
