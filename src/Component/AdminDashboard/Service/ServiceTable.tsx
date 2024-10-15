"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import EditIcon from "@/assent/Img/AdminDashboard/editIcon.svg";
import Paginate from "@/Component/AdminDashboard/Users/Paginate";
import ServiceData from "./ServiceData";
import Link from "next/link";
const ServiceTable = () => {
  const Data = ServiceData().User;
  

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const offset = (currentPage - 1) * itemsPerPage;
  const currentPageData = Data.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(Data.length / itemsPerPage);

  const pageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected + 1);
  };

 
  return (
    <Fragment>
      <div>
        <div className=" mt-5 -mr-4 ">
          <div className=" w-full h-[40%] overflow-hidden rounded-md p-2 dark:bg-[#4F5D74] dark:text-white">
            <table className=" table-auto border-collapse">
              <thead>
                <tr className="bg-[#DC1E7A] text-white font-regular ">
              
                  <th className="w-[20%] pr-2 pl-14 py-2 whitespace-nowrap">وضعیت</th>
                  <th className="w-[10%] px-4 py-2 whitespace-nowrap">ردیف</th>
                  <th className="w-[16%] pr-16  py-2 whitespace-nowrap">تصویر</th>

                  <th className="w-[25%] pl-[15%] pr-10  py-2 whitespace-nowrap">
                    نوع خدمات
                  </th>
                  <th className="w-[16%] pl-24 py-2 whitespace-nowrap">
                    تعداد جلسه
                  </th>
                  <th className=" pr-4 pl-12 w-20 py-2 whitespace-nowrap">قیمت</th>
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
                      <td className="w-1/12 py-[4.5px] pr-8">
                      <input type="checkbox" className="  toggle toggle-success" defaultChecked />
                      </td>
                      <td className="w-1/12 py-[4.5px] px-32">{user.id}</td>
                      <td className="w-1/12 pl-8 py-[4.5px] ">
                      <Image
                      src={user.src}
                      width={54}
                      height={54}
                      alt=""
                      className="rounded-lg"
                      />
                      </td>
                      <td className="w-[14%] whitespace-nowrap py-2 px-4 ">
                        <div className=" ">
                       {user.Service}
                        </div>
                      </td>

                      <td className="w-20 py-2 whitespace-nowrap pr-14 pl-10">
                        {user.Setion.toLocaleString()} جلسه
                      </td>

                      

                      <td className="w-[20%]  py-2  px-12 whitespace-nowrap">
                        {user.Price.toLocaleString()}
                        {""} تومان
                      </td>

                   

                      <td className="w-1/12 py-2 pr-2 ">
                        <button className="w-6 h-6">
                          <Link href="/AdminDashboard/Service/EditService">
                            <Image
                              src={EditIcon}
                              width={24}
                              height={24}
                              alt="ویرایش"
                            />
                          </Link>
                        </button>
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

        
      </div>
    </Fragment>
  );
};

export default ServiceTable;
