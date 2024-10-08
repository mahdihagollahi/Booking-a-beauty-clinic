// import React, { Fragment } from "react";
// import Background from "@/assent/Img/AdminDashboard/ShowDoctorFrame.svg";
// import Image from "next/image";
// import MoreDoctor from "@/assent/Img/AdminDashboard/MoreShowDoctor.svg";
// import DoctorShowData from "@/Component/AdminDashboard/Dashboard/DoctorShowData";
// import DashDashboard from '@/assent/Img/AdminDashboard/DashDahboard.svg'
// import DoughnutChart from "./DoughnutChart";
// const DoctorShow = () => {
//   const Data = DoctorShowData().Doctor;
//   return (
//     <Fragment>
//       <div className="bg-white  absolute -mt-[57%] right-[74%] shadow-md rounded-[40px]">
//         <div
//           className="w-full h-80 rounded-[40px]"
//           style={{
//             backgroundImage: `url(${Background.src})`,
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover",
//           }}
//         >
//           <div>
//             <Image
//               src={Data[0].src}
//               width={84}
//               height={84}
//               alt=""
//               className="pt-32 mr-28"
//             />

//             <p className=" mr-[32%] mt-3">دکتر {Data[0].name}</p>

//             <p className=" mr-[27%] mt-1 ">{Data[0].Work}</p>
//           </div>
//         </div>
//         <div className="">
//           <Image
//             src={MoreDoctor}
//             width={28}
//             height={28}
//             alt=""
//             className="mr-60"
//           />
//           <p className="text-[#8F8F8F] mr-56 mt-4 text-xs font-regular whitespace-nowrap">
//             مشاهده بیشتر
//           </p>
//         </div>
//         <div>
//           <p className="font-medium pr-4 text-sm text-[#393939]">لیست دکتر ها</p>
//           {Data.map((items) => (
//             <div key={items.id} className="flex mb-5 pr-4 mt-2 items-center gap-3">
//               <Image src={items.src}
//               width={54}
//               height={54}
//               alt=""
//               />
//               <div>
//                 <p className="font-medium text-sm text-[#393939]">
//                     <span className="text-[#DC1E7A]">دکتر</span>
//                     {items.name}
//                 </p>
//                 <p className="font-regular text-[#8F8F8F] text-xs">
//                     {items.Work}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <Image
//         src={DashDashboard}
//         width={295}
//         height={0}
//         alt=""
//         className="my-10 mr-4"
//         />

//       </div>

//       <div >
//    <DoughnutChart/>
//    </div>

//     </Fragment>
//   );
// };

// export default DoctorShow;

"use client";

import React, { Fragment, PureComponent } from "react";
import Background from "@/assent/Img/AdminDashboard/ShowDoctorFrame.svg";
import Image from "next/image";
import MoreDoctor from "@/assent/Img/AdminDashboard/MoreShowDoctor.svg";
import DoctorShowData from "@/Component/AdminDashboard/Dashboard/DoctorShowData";
import DashDashboard from "@/assent/Img/AdminDashboard/DashDahboard.svg";
import DoughnutChart from "./DoughnutChart";

const DoctorShow = () => {
  const Data = DoctorShowData().Doctor;

  return (
    <Fragment>
      <div className="bg-white  absolute -mt-[57%] right-[73%] shadow-md rounded-[40px]">
        <div
          className="w-full h-80 rounded-[40px]"
          style={{
            backgroundImage: `url(${Background.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div>
            <Image
              src={Data[0].src}
              width={84}
              height={84}
              alt=""
              className="pt-32 mr-28"
            />
            <p className=" mr-[32%] mt-3">دکتر {Data[0].name}</p>
            <p className=" mr-[27%] mt-1 ">{Data[0].Work}</p>
          </div>
        </div>

        <div className="-mt-10">
          <Image
            src={MoreDoctor}
            width={28}
            height={28}
            alt=""
            className="mr-60"
          />
          <p className="text-[#8F8F8F] mr-56 mt-4 text-xs font-regular whitespace-nowrap">
            مشاهده بیشتر
          </p>
        </div>

        <div>
          <p className="font-medium pr-4 text-sm text-[#393939]">
            لیست دکتر ها
          </p>
          {Data.map((items) => (
            <div
              key={items.id}
              className="flex mb-5 pr-4 mt-2 items-center gap-3"
            >
              <Image src={items.src} width={54} height={54} alt="" />
              <div>
                <p className="font-medium text-sm text-[#393939]">
                  <span className="text-[#DC1E7A]">دکتر</span>
                  {items.name}
                </p>
                <p className="font-regular text-[#8F8F8F] text-xs">
                  {items.Work}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Image
          src={DashDashboard}
          width={295}
          height={0}
          alt=""
          className="my-5 mr-4"
        />
        <div className=" ">
            <p className="font-medium px-4 text-base text-[#393939]">
            درصد رضایت خدمات
            </p>
          <DoughnutChart />
        </div>
      </div>
    </Fragment>
  );
};

export default DoctorShow;
