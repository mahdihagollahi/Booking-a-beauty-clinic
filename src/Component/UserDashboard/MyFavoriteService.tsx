import React, { Fragment } from "react";
import Navbar from "./component/Navbar";
import ServiceShow from "./Favorite/Service/ServiceShow";
const MyFavoriteService = () => {
  return (
    <Fragment>
      <div className="flex gap-8 bg-[#FFF7FE] h-full ">
        <div>
          <Navbar />
        </div>

        <div
          className=" bg-white overflow-scroll w-[79%] relative mt-10 p-6  rounded-3xl"
          style={{ zIndex: 30 }}
        >
          <p className="font-medium text-2xl text-[#393939] mt-5 mb-10">
            علاقه مندی
          </p>
          <ServiceShow />
        </div>
      </div>
    </Fragment>
  );
};

export default MyFavoriteService;
