"use client";
// import React, { Fragment, useState } from "react";
// import Image from "next/image";
// import MyCommentData from "./MyCommentData";
// import AcceptComment from "@/assent/Img/UserDashboard/MyCommentAccept.svg";
// import AdminPending from "@/assent/Img/UserDashboard/AdminPending.svg";
// import adminComment from "@/assent/Img/Service//adminComment.svg";
// import IconDown from "@/assent/Img/Service/arrowDown.svg";
// const MyCommentComponent = () => {
//   const [showReplies, setShowReplies] = useState(null);
//   const Data = MyCommentData().Comment;
//   return (
//     <Fragment>
//       <p className="font-medium text-2xl text-[#393939] mt-5">نظرات های من</p>
//       <div>
//         {Data.map((items) => (
//           <div key={items.id} className="w-full rounded-lg mt-20 ">
//             <div className="flex items-center gap-2">
//               <Image src={items.image} width={64} height={64} alt="" />
//               <div className="flex gap-[750px] items-center">
//                 <div>
//                   <p className="font-medium text-base text-[#393939]">
//                     {items.name}
//                   </p>
//                 </div>
//                 <div>
//                   {items.status === "accepted" ? (
//                     <div className="bg-[#DEFFDB]  whitespace-nowrap rounded-lg px-6 py-2 flex items-center gap-2">
//                       <Image
//                         src={AcceptComment}
//                         width={24}
//                         height={24}
//                         alt=""
//                       />
//                       <p className="text-[#00966D]  text-lg font-regular">
//                         تایید شده
//                       </p>
//                     </div>
//                   ) : (
//                     <div className="bg-[#DBFFFE]  whitespace-nowrap rounded-lg px-6 py-2 flex items-center gap-2">
//                       <Image src={AdminPending} width={24} height={24} alt="" />
//                       <p className="text-[#00AEFF]  text-lg font-regular">
//                         در انتظار
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//             <p className="font-regular text-[#565656] text-sm w-[98%] px-5 mt-5">
//               {items.discription}
//             </p>
//             <div className="flex items-center justify-between">
//               <div>
//                 <button
//                   onClick={() => setShowReplies(!showReplies)}
//                   className="text-pink-600 duration-300 flex items-center text-sm mt-2"
//                 >
//                   <Image
//                     src={IconDown}
//                     width={20}
//                     height={20}
//                     alt="Toggle Replies Icon"
//                     className={`ml-1 transform transition-transform duration-300 ${
//                       showReplies ? "rotate-0" : "-rotate-180"
//                     }`}
//                   />
//                   <span>
//                     {showReplies === items.id
//                       ? "مشاهده پاسخ ادمین"
//                       : "مشاهده پاسخ ادمین"}
//                   </span>
//                 </button>
//               </div>
//             </div>
//             {showReplies === items.id && (
//               <div className="mt-4">
//                 {items.replies.map((reply, index) => (
//                   <div
//                     key={index}
//                     className="bg-white duration-300 p-3 rounded-lg "
//                   >
//                     <div className="flex items-center mr-2 mb-2 justify-between">
//                       <span className="bg-[#DC1E7A] text-white p-2  rounded-md font-regular text-sm">
//                         {reply.adminName}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </Fragment>
//   );
// };

// export default MyCommentComponent;

"use Client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import MyCommentData from "./MyCommentData";
import AcceptComment from "@/assent/Img/UserDashboard/MyCommentAccept.svg";
import AdminPending from "@/assent/Img/UserDashboard/AdminPending.svg";
import IconDown from "@/assent/Img/Service/arrowDown.svg";

const MyCommentComponent = () => {
  const [showReplies, setShowReplies] = useState(null);
  const Data = MyCommentData().Comment;

  return (
    <Fragment>
      <p className="font-medium text-2xl text-[#393939] mt-5">نظرات های من</p>
      <div className=" overflow-y-scroll">
        {Data.map((items) => (
          <div
            key={items.id}
            className="w-full rounded-lg mt-20 overflow-y-scroll "
          >
            <div className="flex items-center gap-2">
              <Image src={items.image} width={64} height={64} alt="" />
              <div className="flex gap-[750px] items-center">
                <div>
                  <p className="font-medium text-base text-[#393939]">
                    {items.name}
                  </p>
                </div>
                <div>
                  {items.status === "accepted" ? (
                    <div className="bg-[#DEFFDB]  whitespace-nowrap rounded-lg px-6 py-2 flex items-center gap-2">
                      <Image
                        src={AcceptComment}
                        width={24}
                        height={24}
                        alt=""
                      />
                      <p className="text-[#00966D]  text-lg font-regular">
                        تایید شده
                      </p>
                    </div>
                  ) : (
                    <div className="bg-[#DBFFFE]  whitespace-nowrap rounded-lg px-6 py-2 flex items-center gap-2">
                      <Image src={AdminPending} width={24} height={24} alt="" />
                      <p className="text-[#00AEFF]  text-lg font-regular">
                        در انتظار
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <p className="font-regular text-[#565656] text-sm w-[98%] px-5 mt-5">
              {items.discription}
            </p>
            <div className="flex duration-300 items-center justify-between">
              <div>
                <button
                  onClick={() =>
                    setShowReplies(showReplies === items.id ? null : items.id)
                  } 
                  className="text-pink-600 duration-300 flex items-center text-sm mt-2"
                >
                  <Image
                    src={IconDown}
                    width={20}
                    height={20}
                    alt="Toggle Replies Icon"
                    className={`ml-1 transform transition-transform duration-300 ${
                      showReplies === items.id ? "-rotate-180" : "rotate-0"
                    }`}
                  />
                  <span>
                    {showReplies === items.id
                      ? "مشاهده پاسخ ادمین"
                      : "مشاهده پاسخ ادمین"}
                  </span>
                </button>
              </div>
            </div>

        
            {showReplies === items.id && (
              <div className="mt-4 duration-300">
                {items.replies.map((reply, index) => (
                  <div key={index} className="bg-white duration-300 p-3 rounded-lg">
                    <div className="flex items-center mr-2 mb-2 justify-between">
                    <p className="bg-[#DC1E7A] text-white p-2  rounded-md font-regular text-sm">
                      {reply.adminName}
                    </p>
                    </div>

                    <div className="flex items-center mr-2 mb-2 justify-between">
                    <p className="text-[#393939]  p-2  rounded-md font-regular text-base">
                      {reply.replier}
                    </p>
                    </div>
                    <div className="flex w-44 items-center border-r-2 border-[#BCBCBC] pr-3  mr-2 mb-2 justify-between">
                    <p className="text-base whitespace-nowrap  text-[#565656]">
                       پاسخ به   
                       {' '}
                      <span className="text-[#EA78AF]">
                        {reply.user}
                      </span>
                    </p>
                    </div>
                    <p className="text-sm font-regular mr-2  text-[#A5A5A5] mt-2">{reply.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default MyCommentComponent;
