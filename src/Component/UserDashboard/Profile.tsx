"use client";
import React, { Fragment, useState } from "react";
import Navbar from "./component/Navbar";
import InputProfile from "./component/InputProfile";
import Image from "next/image";
import UserProfile from "@/assent/Img/UserDashboard/UserProfile.svg";
import Lock from "@/assent/Img/UserDashboard/lock.svg";
import Arrow from "@/assent/Img/UserDashboard/Arrow.svg";
import Modal from "./component/Modal";
import ChangePasswordModal from "./component/ChangePasswordModal";

function Profile() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    console.log("Opening modal...");
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    console.log("Closing modal...");
    setIsModalVisible(false);
  };
  return (
    <Fragment>
      <div className="flex gap-8 bg-[#FFF7FE] h-full ">
        <div>
          <Navbar />
        </div>

        <div className=" bg-white w-[79%]  mt-10 p-6  rounded-3xl">
          <p className="font-medium text-2xl text-[#393939] mt-5">پروفایل</p>
          <Image
            src={UserProfile}
            width={84}
            height={84}
            alt="user profile"
            className="mt-10"
          />
          <InputProfile />
          <div className="flex justify-between items-center">
            <button
              className="flex items-center gap-2 mt-10 cursor-pointer"
              onClick={handleOpenModal}
            >
              <Image src={Lock} width={24} height={24} alt="" />
              <p className="font-regular text-base text-[#393939]">
                تغییر گذرواژه
              </p>
              <Image src={Arrow} width={24} height={24} alt="" />
            </button>
         
              <button className="bg-[#DC1E7A] text-white rounded-md py-2 mt-10 px-4">
                ثبت تغییرات
              </button>
          
          </div>
        </div>
      </div>
      <div className="w-full">
        <Modal isVisible={isModalVisible}>
          <ChangePasswordModal handleCloseModal={handleCloseModal} />
        </Modal>
      </div>
    </Fragment>
  );
}

export default Profile;
