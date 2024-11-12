import React from "react";
const Articles = () => {
  return (
    <>
      <div className="flex flex-col gap-10 ">
        <div>
          <span className="text-xl ">مقالات</span>
        </div>

        <div className="flex flex-col gap-4">
          <div>عنوان مقالات:</div>
          <input className="w-96 bg-white h-12 p-3 border-2 border-[#00AEFF] rounded-lg" />
        </div>

        <div className="flex flex-col gap-4">
          <div>جزئیات مقاله اول:</div>
          <input className="w-full bg-white h-32 p-3 border-2 border-[#00AEFF] rounded-lg" />
        </div>
      </div>
    </>
  );
};
export default Articles;
