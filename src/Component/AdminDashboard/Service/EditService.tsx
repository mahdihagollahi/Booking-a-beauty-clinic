"use client";

import React, { Fragment, useState } from "react";
import WelcomePanel from "@/Component/AdminDashboard/Dashboard/HeaderDashboard";
import NavbarDashboard from "@/Component/AdminDashboard/Navbar/NavbarDashboard";
import Image from "next/image";
import AddPhoto from "./AddPhoto";
import RuleImage from "@/assent/Img/AdminDashboard/RuleAddPhoto.svg";
import AddServiceImage from "@/assent/Img/AdminDashboard/AddService.svg";
import Modal from "@/Component/UserDashboard/component/Modal";
import AcceptChangeModal from "@/Component/AdminDashboard/Doctor/AcceptChangeModal";
const EditService: React.FC = () => {
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

      <div className="w-[73.5%] h-[118.5%] shadow rounded-2xl py-6 px-4 mr-80 overflow-y-scroll -mt-[67.5%] bg-white ml-72">
        <p className="font-medium text-xl text-[#393939]">خدمات</p>

        <div className="flex gap-[40%]">
          <div>
            <p className="font-medium text-lg text-[#393939] mt-6">
              بارگذاری تصویر :
            </p>
            <AddPhoto />
          </div>
          <div className="mt-4">
            <Image src={RuleImage} width={159} height={122} alt="" />
          </div>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div>
            <p className=" mr-2 text-[#2B2B2B] font-medium text-base">
              نوع خدمات :
            </p>
            <input
              type="text"
              className="w-[457px] p-4 mb-4  border border-[#00AEFF] rounded-lg mt-1"
            />
          </div>
          <div>
            <p className=" mr-2 text-[#2B2B2B] font-medium text-base">
              دسته بندی :
            </p>
            <input
              type="text"
              className="w-[457px] p-4 mb-4 border border-[#00AEFF] text-[] rounded-lg mt-1"
            />
          </div>
        </div>
        <div className="flex items-center  justify-between">
          <div>
            <p className=" mr-2 text-[#2B2B2B] font-medium text-base">
              مقدمه خدمات :
            </p>
          </div>
          <div>
            <Image src={AddServiceImage} width={24} height={24} alt="" />
          </div>
        </div>

        <input className="w-[1032px] pb-[136px] p-2 mb-4 border border-[#00AEFF] text-[] rounded-lg mt-[5px]" />

        <div className="flex items-center justify-between mt-1">
          <div>
            <p className=" mr-2 text-[#2B2B2B] font-medium text-base">
              تعداد جلسات :
            </p>
            <input
              type="text"
              className="w-[457px] p-4 mb-4 border border-[#00AEFF] text-[#00AEFF] rounded-lg "
            />
          </div>
          <div>
            <p className=" mr-2 text-[#2B2B2B] font-medium text-base">قیمت :</p>
            <input
              type="text"
              className="w-[457px] p-4 mb-4 border border-[#00AEFF] text-[#00AEFF] rounded-lg "
            />
          </div>
        </div>
        <p className=" mr-2 text-[#2B2B2B] font-medium text-base">رده سنی :</p>
        <input
          type="text"
          className="w-[457px] p-4 mb-4 border border-[#00AEFF] text-[#00AEFF] rounded-lg mt-1"
        />

        <div className="flex items-center justify-between mt-2">
          <div>
            <p className=" mr-2 text-[#2B2B2B] font-medium text-base">
              چرا این خدمات در کلینیک نورانید:
            </p>
            <input
              type="text"
              className="w-[457px] p-4 mb-4 border border-[#00AEFF] text-[#00AEFF] rounded-lg mt-1"
            />
          </div>
          <div>
            <p className=" mr-2 text-[#2B2B2B] font-medium text-base">
              چرا این خدمات در کلینیک نورانید:
            </p>
            <input
              type="text"
              className="w-[457px] p-4 mb-4 border border-[#00AEFF] text-[#00AEFF] rounded-lg mt-1"
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div>
            <p className=" mr-2 text-[#2B2B2B] font-medium text-base">
              چرا این خدمات در کلینیک نورانید:
            </p>
            <input
              type="text"
              className="w-[457px] p-4 mb-4 border border-[#00AEFF] text-[#00AEFF] rounded-lg mt-1"
            />
          </div>
          <div>
            <p className=" mr-2 text-[#2B2B2B] font-medium text-base">
              چرا این خدمات در کلینیک نورانید:
            </p>
            <input
              type="text"
              className="w-[457px] p-4 mb-4 border border-[#00AEFF] text-[#00AEFF] rounded-lg mt-1"
            />
          </div>
        </div>
        <p className=" mr-2 text-[#2B2B2B] font-medium text-base">
          عنوان پارگراف اول:
        </p>
        <input
          type="text"
          className="w-[457px] p-4 mb-4 border border-[#00AEFF] text-[]#00AEFF rounded-lg mt-1"
        />

        <div className="flex items-center  justify-between">
          <div>
            <p className=" mr-2 text-[#2B2B2B] font-medium text-base">
              پارگراف اول:
            </p>
          </div>
          <div>
            <Image src={AddServiceImage} width={24} height={24} alt="" />
          </div>
        </div>

        <input className="w-[1032px] pb-[136px] p-2 mb-4 border border-[#00AEFF] text-[#00AEFF] rounded-lg mt-[5px]" />

        <p className=" mr-2 text-[#2B2B2B] font-medium text-base">
          عنوان پارگراف دوم:
        </p>
        <input
          type="text"
          className="w-[457px] p-4 mb-4 border border-[#00AEFF] text-[#00AEFF] rounded-lg mt-1"
        />

        <div className="flex items-center  justify-between">
          <div>
            <p className=" mr-2 text-[#2B2B2B] font-medium text-base">
              پارگراف دوم:
            </p>
          </div>
          <div>
            <Image src={AddServiceImage} width={24} height={24} alt="" />
          </div>
        </div>

        <input className="w-[1032px] pb-[136px] p-2 mb-4 border border-[#00AEFF] text-[#00AEFF] rounded-lg mt-[5px]" />

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

export default EditService;
