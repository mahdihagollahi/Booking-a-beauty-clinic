"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import EditIcon from "@/assent/Img/AdminDashboard/editIcon.svg";
import Paginate from "@/Component/AdminDashboard/Users/Paginate";
import DoctorData from "@/Component/AdminDashboard/Doctor/DoctorData";
import Link from "next/link";
import Modal from "@/Component/UserDashboard/component/Modal";
import TrashIcon from "@/assent/Img/AdminDashboard/trashIcon.svg";

import ModalDeleteUser from "@/Component/AdminDashboard/Users/ModalDeleteUser";
const DoctorTable = () => {
  const Data = DoctorData().Doctor;
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;

  const offset = (currentPage - 1) * itemsPerPage;
  const currentPageData = Data.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(Data.length / itemsPerPage);

  const pageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected + 1);
  };

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <Fragment>
      <div>
        <div className=" mt-5 -mr-4 ">
          <div className=" w-full h-[40%] overflow-hidden rounded-md p-2 dark:bg-[#4F5D74] dark:text-white">
            <table className=" table-auto border-collapse">
              <thead>
                <tr className="bg-[#DC1E7A] text-white font-regular ">
                  <th className="w-[10%] px-4 py-2 whitespace-nowrap">ردیف</th>
                  <th className="w-[16%] pr-[50px]  py-2 whitespace-nowrap">
                    تصویر
                  </th>

                  <th className="w-[25%] pl-[15%] pr-14  py-2 whitespace-nowrap">
                    نام پزشک
                  </th>
                  <th className="w-[16%] pl-24 py-2 whitespace-nowrap">تخصص</th>
                  <th className=" pr-4 pl-12 w-20 py-2 whitespace-nowrap">
                    روز و ساعت حضور دکتر
                  </th>
                  <th className="w-[13%] px-4 py-2 whitespace-nowrap">
                    عملیات
                  </th>
                </tr>
              </thead>
            </table>
            <div className="mt-4">
              <table className="w-full table-auto border-collapse">
                <tbody className="divide-y divide-gray-200 space-y-4">
                  {currentPageData.map((user, index) => (
                    <tr
                      key={user.id}
                      className={
                        index % 2 === 0 ? "bg-[#FFF2F8]" : "bg-[#FFFFFF]"
                      }
                    >
                      <td className="w-1/12 py-[4.5px] px-10">{user.id}</td>
                      <td className="w-[10%] pr-[70px] py-[4.5px] ">
                        <Image
                          src={user.src}
                          width={54}
                          height={54}
                          alt=""
                          className="rounded-lg"
                        />
                      </td>
                      <td className="w-[17%] whitespace-nowrap py-2 pr-20 ">
                        <div className=" ">{user.Name}</div>
                      </td>

                      <td className="w-[10%]  py-2  pr-16 whitespace-nowrap">
                        {user.Expertise}
                      </td>

                      <td className="w-[20%]  py-2  pr-12 whitespace-nowrap">
                        {user.Time}
                      </td>

                      <td className="w-1/12 py-2 pr-2 ">
                        <div className="flex items-center gap-2">
                          <button className="w-6 h-6">
                            <Link href="/AdminDashboard/Doctor/EditDoctor">
                              <Image
                                src={EditIcon}
                                width={24}
                                height={24}
                                alt="ویرایش"
                              />
                            </Link>
                          </button>

                          <button className="w-6 h-6" onClick={handleOpenModal}>
                            <Image
                              src={TrashIcon}
                              width={24}
                              height={24}
                              alt="حذف"
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Modal isVisible={isModalVisible}>
          <ModalDeleteUser handleCloseModal={handleCloseModal} />
        </Modal>

        <Paginate
          currentPageData={currentPageData}
          pageCount={pageCount}
          pageClick={pageClick}
        />
      </div>
    </Fragment>
  );
};

export default DoctorTable;
