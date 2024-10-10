import React, { Fragment } from "react";

const ModalDeleteUser = ({ handleCloseModal }) => {
  return (
    <Fragment>
      <div className="flex justify-center mt-64">
        <div className="bg-white flex flex-col px-10  w-72 h-[362px] rounded-xl py-10">
          <p className="font-medium text-base mt-20 whitespace-nowrap text-[#292C2C]">
            آیا برای حذف کاربر اطمینان دارد؟
          </p>
          <div className=" flex gap-5 mt-10">
            <button
              className="bg-white flex items-center justify-center text-[#DC1E7A] border border-[#DC1E7A] px-4 py-[9px] w-[98px] h-8 rounded-md "
              onClick={handleCloseModal}
            >
              لغو
            </button>

            <button className="bg-[#DC1E7A] flex items-center justify-center px-4 py-[9px] w-[98px] h-8 rounded-md text-white">
              تائید
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ModalDeleteUser;
