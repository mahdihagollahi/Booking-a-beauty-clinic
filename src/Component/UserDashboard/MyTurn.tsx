import React, { Fragment } from "react";
import Navbar from "./component/Navbar";
import MyTurnComponent from "./component/MyTurnComponent";
const MyTurn = () => {
  return (
    <Fragment>
      <div className="flex gap-8 bg-[#FFF7FE] h-full ">
        <div>
          <Navbar />
        </div>
        <div className=" bg-white w-[79%]  mt-10 p-6  rounded-3xl">
          <p className="font-medium text-2xl text-[#393939] mt-5">
            نوبت های من
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
            <MyTurnComponent />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MyTurn;
