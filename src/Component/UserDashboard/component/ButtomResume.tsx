import React from "react";

const ButtomResume = () => {
  return (
    <>
      <div className="flex flex-col gap-12">
        <div>
          <span className="text-[#393939] text-[20px]">نمونه کار </span>
        </div>
        <div className=" flex flex-row rouded-[10px] ">
          <button className=" p-5 rounded-r-lg bg-[#FFF2F8] text-[#393939] hover:bg-[#DC1E7A] hover:text-white">
            تزریقات زیبایی
          </button>
          <button className=" p-5 bg-[#FFF2F8] text-[#393939] hover:bg-[#DC1E7A] hover:text-white">
            لیزر موهای زائد
          </button>
          <button className=" p-5 rounded-l-lg bg-[#FFF2F8] text-[#393939] hover:bg-[#DC1E7A] hover:text-white">
            انواع کاشت
          </button>
        </div>
      </div>
    </>
  );
};
export default ButtomResume;
