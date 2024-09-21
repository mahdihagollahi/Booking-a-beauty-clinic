import React, { Fragment } from "react";

const InformationInput = () => {
  return (
    <Fragment>
      <div className="bg-white w-[477px] h-auto px-6 py-16 rounded-lg ">
        <input
          type="text"
          placeholder="نام "
          className="w-[100%] p-4 mb-4 border border-[#F4F4F4] dark:bg-white rounded-lg mt-4 placeholder:font-medium placeholder:text-sm placeholder:text-[#8F8F8F]"
        />

        <input
          type="text"
          placeholder="نام خانوادگی"
          className="w-[100%] p-4 mb-4 border border-[#F4F4F4] dark:bg-white rounded-lg mt-4 placeholder:font-medium placeholder:text-sm placeholder:text-[#8F8F8F]"
        />

        <input
          type="text"
          placeholder="نوع خدمات"
          className="w-[100%] p-4 mb-4 border border-[#F4F4F4] dark:bg-white rounded-lg mt-4 placeholder:font-medium placeholder:text-sm placeholder:text-[#8F8F8F]"
        />

        <input
          type="text"
          placeholder="شماره تماس"
          className="w-[100%] p-4 mb-4 border border-[#F4F4F4] dark:bg-white rounded-lg mt-4 placeholder:font-medium placeholder:text-sm placeholder:text-[#8F8F8F]"
        />
        <button className="text-[#FFFFFF] text-sm font-medium py-2 px-4 w-[20%] mr-[80%] mt-4 bg-[#5DD9C1] rounded-sm">
          تایید
        </button>
      </div>
    </Fragment>
  );
};

export default InformationInput;
