import React, { Fragment } from "react";
import Navbar from "./component/Navbar";
import MyCommentComponent from "./component/MyCommentComponent";

const MyComment = () => {
  return (
    <Fragment>
      <div className="flex gap-8 bg-[#FFF7FE]  ">
        <div>
          <Navbar />
        </div>
        <div className=" bg-white w-[79%]  mt-10 p-6  rounded-3xl">
          <MyCommentComponent />
        </div>
      </div>
    </Fragment>
  );
};

export default MyComment;
