"use client";
import React, { Fragment, useState } from "react";
import WelcomePanel from "@/Component/AdminDashboard/Dashboard/HeaderDashboard";
import NavbarDashboard from "@/Component/AdminDashboard/Navbar/NavbarDashboard";
import Image from "next/image";
import AddPhoto from "@/Component/AdminDashboard/Service/AddPhoto";
import RuleImage from "@/assent/Img/AdminDashboard/RuleAddPhoto.svg";
import Modal from "@/Component/UserDashboard/component/Modal";
import AcceptChangeDoctorModal from "./AcceptChangeDoctorModal";
const AddDoctor: React.FC = () => {
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
      <div className="w-[73.5%] h-[118.5%] shadow rounded-2xl py-6 px-4 mr-80 -mt-[67.5%] bg-white ml-72">
        <p className="font-medium text-xl text-[#393939]">پزشکان</p>
        <div className="flex justify-end mt-4">
          <Image src={RuleImage} width={159} height={122} alt="" />
        </div>

        <div className="flex justify-between">
          <div>
            <p className=" mr-2 text-[#2B2B2B] font-medium text-base">
              نام پزشک :
            </p>
            <input
              type="text"
              className="w-[457px] p-4 mb-4 border border-gray-300 rounded-lg mt-1"
            />

            <p className=" mr-2 mt-7 text-[#2B2B2B] font-medium text-base">
              تخصص :
            </p>
            <input
              type="text"
              className="w-[457px] p-4 mb-4 border border-gray-300 rounded-lg mt-1"
            />
          </div>
          <div>
            <p className="font-medium text-lg text-[#393939] ">
              بارگذاری تصویر :
            </p>
            <AddPhoto />
          </div>
        </div>

        <div className="flex items-center mt-8 justify-between">
          <div>
            <p className=" mr-2  text-[#2B2B2B] font-medium text-base">
              بیوگرافی :
            </p>
            <input
              type="text"
              className="w-[457px] p-4 mb-4 border border-gray-300 rounded-lg mt-1"
            />
          </div>
          <div>
            <p className=" mr-2 mt-1 text-[#2B2B2B] font-medium text-base">
              روز و ساعت مراجعه دکتر :
            </p>
            <input
              type="text"
              className="w-[457px] p-4 mb-4 border border-gray-300 rounded-lg mt-1"
            />
          </div>
        </div>
        <button
          onClick={handleOpenModal}
          className="text-white bg-[#DC1E7A] w-36 h-10 py-2 px-4 font-medium mt-5 rounded-lg mr-[86%] text-base"
        >
          اعمال تغییرات
        </button>
      </div>

      <Modal isVisible={isModalVisible}>
        <AcceptChangeDoctorModal handleCloseModal={handleCloseModal} />
      </Modal>
    </Fragment>
  );
};

export default AddDoctor;
