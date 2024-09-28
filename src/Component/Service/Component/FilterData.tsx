import React, { Fragment } from "react";

function FilterData() {
  return (
    <Fragment>
      <div className="bg-white w-80 mt-10  mr-10 h-[30%] shadow-md">
        <div className="flex flex-col gap-8 px-4 py-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-[#DC1E7A]"
            />
            <span className="label-text font-medium text-base text-[#393939]">
              تزریقات زیبایی
            </span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-[#DC1E7A]"
            />
            <span className="label-text font-medium text-base text-[#393939]">
              مراقبت های پوستی
            </span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-[#DC1E7A]"
            />
            <span className="label-text font-medium text-base text-[#393939]">
              لیزر موهای زائد
            </span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-[#DC1E7A]"
            />
            <span className="label-text font-medium text-base text-[#393939]">
              انواع کاشت
            </span>
          </label>
        </div>
      </div>
    </Fragment>
  );
}

export default FilterData;
