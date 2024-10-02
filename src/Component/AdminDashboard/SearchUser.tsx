import React from "react";
import { Label } from "recharts";

const SearchUser = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label className="text-sm	">جستجو کاربران</label>

        <input
          type="name"
          className="rounded-md bg-[#F4F4F4] w-96 h-12"
          placeholder="جستجو"
        />
      </div>
    </>
  );
};
export default SearchUser;
