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
          <MyTurnComponent />
        </div>
      </div>
    </Fragment>
  );
};

export default MyTurn;
