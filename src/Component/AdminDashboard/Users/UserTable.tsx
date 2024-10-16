"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import TrashIcon from "@/assent/Img/AdminDashboard/trashIcon.svg";
import EditIcon from "@/assent/Img/AdminDashboard/editIcon.svg";
import Paginate from "@/Component/AdminDashboard/Users/Paginate";
import UserData from "./UserData";
import Modal from "@/Component/UserDashboard/component/Modal";
import ModalDeleteUser from "./ModalDeleteUser";
import Link from "next/link";
const UserTable = () => {
  const Data = UserData().User;
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 9;

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
                  <th className="w-[1%] px-3 py-2">ردیف</th>
                  <th className="w-[20%] px-2 py-2 whitespace-nowrap">
                    نام و نام خانوادگی
                  </th>
                  <th className="w-[20%] px-4 py-2 whitespace-nowrap">
                    شماره تماس
                  </th>
                  <th className="w-[16%] px-4 py-2 whitespace-nowrap">
                    مجموع رزرو ها
                  </th>

                  <th className="w-[25%] px-[15%] py-2 whitespace-nowrap">
                    قیمت کل رزروها
                  </th>
                  <th className="w-[16%] px-4 py-2 whitespace-nowrap">
                    نقش ها
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
                      <td className="w-1/12 py-[22.5px] px-4">{user.id}</td>
                      <td className="w-[14%] whitespace-nowrap py-2 px-4 ">
                        <div className=" ">
                          {`${user.firstName} ${user.lastName}`}
                        </div>
                      </td>

                      <td className="w-20 py-2 pr-14 pl-10">
                        {user.phoneNumber.toLocaleString()}
                      </td>

                      <td className="w-2/12 py-2 px-20">
                        {user.SumReserve.toLocaleString()}
                      </td>

                      <td className="w-[20%]  py-2  px-12 whitespace-nowrap">
                        {user.SumPrice.toLocaleString()}
                        {""} تومان
                      </td>

                      <td className="w-[10%]  py-2  px-14 whitespace-nowrap">
                        {user.Carcter}
                      </td>

                      <td className="w-1/12 py-2 pr-2 ">
                        <div className="flex items-center gap-2">
                          <button className="w-6 h-6">
                            <Link href="/AdminDashboard/Users/Edit">
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

        <Paginate
          currentPageData={currentPageData}
          pageCount={pageCount}
          pageClick={pageClick}
        />

        <Modal isVisible={isModalVisible}>
          <ModalDeleteUser handleCloseModal={handleCloseModal} />
        </Modal>
      </div>
    </Fragment>
  );
};

export default UserTable;
