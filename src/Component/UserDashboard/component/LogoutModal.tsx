import React, { Fragment } from "react";
import Background from "@/assent/Img/UserDashboard/LogOutUser.svg";
const LogoutModal = ({handleCloseModal}) => {
  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <div
          className="  py-52 object-cover px-6 w-[38%]  rounded-2xl shadow-md"
          style={{ backgroundImage: `url(${Background.src})` }}
        >
          <div className="flex justify-center items-center">
            <p className="font-medium text-lg text-[#393939]">
              آیا میخواهید از حساب کاربری خود خارج شوید ؟
            </p>
          </div>
          <div className="flex justify-center gap-20 mt-20 items-center">
            <button className="bg-white border border-[#565656] px-4 py-[9px] w-[101px] rounded-md "
                onClick={handleCloseModal}
            >
              خیر
            </button>

            <button className="bg-[#DC1E7A] px-4 py-[9px] w-[101px] rounded-md text-white">
              بله
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LogoutModal;
