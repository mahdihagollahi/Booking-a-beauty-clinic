"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import Paginate from "@/Component/AdminDashboard/Users/Paginate";
import DataReport from "@/Component/AdminDashboard/Report/DataReport";
import IconDownload from "@/assent/Img/AdminDashboard/DownloadReport.svg";

const ReportTable = () => {
  const Data = DataReport().Report;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;

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
                  <th className="w-[1%] px-3 py-2">ردیف</th>
                  <th className="w-[20%] px-2 py-2 whitespace-nowrap">
                    نوع خدمات
                  </th>
                  <th className="w-[20%] px-4 py-2 whitespace-nowrap">
                    نام پزشک
                  </th>
                  <th className="w-[16%] px-4 py-2 whitespace-nowrap">
                    مجموع نوبت ها
                  </th>

                  <th className="w-[25%] px-[15%] py-2 whitespace-nowrap">
                    کل فروش
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
                  {currentPageData.map((items, index) => (
                    <tr
                      key={items.id}
                      className={
                        index % 2 === 0 ? "bg-[#FFF2F8]" : "bg-[#FFFFFF]"
                      }
                    >
                      <td className="w-1/12 py-[22.5px] px-4">{items.id}</td>
                      <td className="w-[14%] whitespace-nowrap py-2 pr-6 ">
                        <div className=" ">{items.name}</div>
                      </td>

                      <td className="w-20 py-2 pr-24 ">{items.DoctorName}</td>

                      <td className="w-2/12 py-2  pr-24">{items.SumTurn}</td>

                      <td className="w-[20%]  py-2  pr-24 whitespace-nowrap">
                        {items.SumPrice.toLocaleString()}
                        {""} تومان
                      </td>

                      <td className="w-[20%] pr-16 py-2">
                        <div className="flex items-center gap-1">
                          <div>
                            <Image
                              src={IconDownload}
                              width={20}
                              height={20}
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="font-regular whitespace-nowrap text-lg text-[#393939]">
                              خروجی اکسل
                            </p>
                          </div>
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
      </div>
    </Fragment>
  );
};

export default ReportTable;
