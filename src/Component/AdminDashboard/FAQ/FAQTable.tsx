"use client";
import React, { Fragment, useState } from "react";
import TrashIcon from "@/assent/Img/AdminDashboard/trashIcon.svg";
import FAQData from "./FAQData";
import Image from "next/image";
import EditIcon from "@/assent/Img/AdminDashboard/editIcon.svg";
import Link from "next/link";
import Modal from "@/Component/UserDashboard/component/Modal";
import ModalDeleteUser from "@/Component/AdminDashboard/Users/ModalDeleteUser";

const FAQTable = () => {
  const Data = FAQData().FAQ;

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  return (
    <Fragment>
      <div className="mt-5">
        {Data.map((items) => (
          <div
            key={items.id}
            className="bg-white mt-2 p-4 w-[1030px] h-[111px] shadow rounded-lg"
          >
            <div className="flex justify-between">
              <div>
                <p className="font-medium text-[#393939] text-base">
                  سوال : {items.Question}
                </p>
                <p className="mt-2 font-regular text-base text-[#727272]">
                  جواب : {items.answer}
                </p>
              </div>
              <div>
                <button className="w-6 h-6">
                  <Link href="/AdminDashboard/Doctor/EditDoctor">
                    <Image src={EditIcon} width={24} height={24} alt="ویرایش" />
                  </Link>
                </button>

                <button className="w-6 h-6" onClick={handleOpenModal}>
                  <Image src={TrashIcon} width={24} height={24} alt="حذف" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal isVisible={isModalVisible}>
        <ModalDeleteUser handleCloseModal={handleCloseModal} />
      </Modal>
    </Fragment>
  );
};

export default FAQTable;
