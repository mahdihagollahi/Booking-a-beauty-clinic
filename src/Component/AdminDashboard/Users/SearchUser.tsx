import React from "react";

const SearchUser = () => {
  return (
    <>
      <div className="flex flex-col gap-2 mt-5">
        <label className="font-medium text-base text-[#393939] mb-1	">
          جستجو کاربران
        </label>
        <div className="flex gap-[50%] items-center">
          <div>
            <input
              type="name"
              className="rounded-md bg-[#F4F4F4] w-96 h-12 p-2"
              placeholder="جستجو"
            />
          </div>
          <div>
            <button className="border-[#DC1E7A] whitespace-nowrap border-solid border-2 rounded-md text-[#DC1E7A] px-4 py-1">
              لیست نقش ها
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchUser;
