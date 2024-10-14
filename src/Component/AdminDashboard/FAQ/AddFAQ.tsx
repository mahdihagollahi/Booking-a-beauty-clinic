"use client";
import React, { Fragment, useState } from "react";
import WelcomePanel from "@/Component/AdminDashboard/Dashboard/HeaderDashboard";
import NavbarDashboard from "@/Component/AdminDashboard/Navbar/NavbarDashboard";
import Modal from "@/Component/UserDashboard/component/Modal";
import AcceptChangeModal from "@/Component/AdminDashboard/Doctor/AcceptChangeModal";
const AddFAQ = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  return (
    <Fragment>
      <WelcomePanel />

      <div>
        <NavbarDashboard />
      </div>

      <div className="w-[73.5%] h-[100%] shadow  rounded-2xl py-6 px-4  mr-80 -mt-[57%] bg-white ml-72">
        <div className="flex gap-[75%] items-center">
          <p className="font-medium text-xl whitespace-nowrap text-[#393939]">
            سوالات متداول
          </p>
        </div>

        <div className="">
          <p className=" mr-2 text-[#2B2B2B] mt-20 font-medium text-base">
            عنوان سوال :
          </p>
          <input
            type="text"
            className="w-[457px] p-4 mb-4 border border-gray-300 rounded-lg mt-3"
          />
        </div>

        <div className="mt-10">
          <p className=" mr-2 text-[#2B2B2B] font-medium text-base">
            پاسخ سوال :
          </p>

          <input className="w-[1032px] pb-[136px] p-2 mb-4 border border-gray-300 rounded-lg mt-[5px]" />
        </div>

        <button
          onClick={handleOpenModal}
          className="text-white bg-[#DC1E7A] w-36 h-10 py-2 px-4 font-medium mt-5 rounded-lg mr-[86%] text-base"
        >
          اعمال تغییرات
        </button>
      </div>

      <Modal isVisible={isModalVisible}>
        <AcceptChangeModal handleCloseModal={handleCloseModal} />
      </Modal>
    </Fragment>
  );
};

export default AddFAQ;
