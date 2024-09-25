"use client";
import React, { Fragment, useState } from "react";
import Background from "@/assent/Img/Landing/bgDoctor.svg";
import Image from "next/image";
import CommentData from "./CommentData";
import ArrowLeft from '@/assent/Img/Landing/ArrowLeft.svg'
import ArrowRight from '@/assent/Img/Landing/ArrowRight.svg'
import CommentUser from "./CommentUser";
import BackgroundComment from "@/assent/Img/Landing/BGComment.svg";
import TagIcon  from '@/assent/Img/Landing/userTagComment.svg'
const UserComment = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const Data = CommentData().Comment;

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
  };
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Data.length) % Data.length);
  }
  return (
    <Fragment>
      <div className="mt-40 px-20">
        <p className="font-medium text-[#3A3A3A] text-2xl">نظرات کاربران</p>
      </div>
      <div className="flex">

     
      <button onClick={goToPrevious} >
        <Image
        src={ArrowRight}
        width={24}
        height={24}
        alt=""
        className="absolute mr-16 -mt-10"
        />
      </button>
     
      <div
        className=" w-[1281px] h-[342] mb-40 mt-20 mx-[8.5%] flex justify-center object-cover "
        style={{ backgroundImage: `url(${Background.src})` }}
      >
        <div className="flex gap-10 ">
        <Image
        src={Data[currentIndex].image}
        width={352}
        height={424}
        alt=""
        className="relative -mt-20 mr-[100%]"
        style={{zIndex:'20'}}
        />
        <div>
          {/* <CommentUser/> */}
          <div className='flex items-center gap-5'>
            <div>
                <Image
                src={TagIcon}
                width={55}
                height={55}
                alt=''
                className='relative mt-20'
                
                />

                <div 
                 style={{ backgroundImage: `url(${BackgroundComment.src})` }}
                >

                </div>
            </div>
        </div>
        </div>
        </div>
     
      </div>
      <button onClick={goToNext}>
      <Image
        src={ArrowLeft}
        width={24}
        height={24}
        alt=""
         className="absolute -mr-20 -mt-10"
        />
      </button>
      </div>
    </Fragment>
  );
};

export default UserComment;


// "use client";
// import React, { Fragment, useState } from "react";
// import Background from "@/assent/Img/Landing/bgDoctor.svg";
// import Image from "next/image";
// import CommentData from "./CommentData";
// import ArrowLeft from '@/assent/Img/Landing/ArrowLeft.svg';
// import ArrowRight from '@/assent/Img/Landing/ArrowRight.svg';
// import BackgroundComment from "@/assent/Img/Landing/BGComment.svg";
// import TagIcon from '@/assent/Img/Landing/userTagComment.svg';

// const UserComment = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const Data = CommentData().Comment;

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
//   };
//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + Data.length) % Data.length);
//   };

//   return (
//     <Fragment>
//       <div className="mt-40 px-20">
//         <p className="font-medium text-[#3A3A3A] text-2xl">نظرات کاربران</p>
//       </div>
//       <div className="flex items-center justify-center relative">
//         {/* فلش سمت راست */}
//         <button onClick={goToPrevious} className="absolute left-10 top-1/2 transform -translate-y-1/2">
//           <Image src={ArrowRight} width={24} height={24} alt="Previous" />
//         </button>

//         <div
//           className="w-[1281px] h-[342px] mb-40 mt-20 flex justify-center relative"
//           style={{ backgroundImage: `url(${Background.src})` }}
//         >
//           <div className="flex items-center gap-10 relative z-20">
//             {/* عکس کاربر */}
//             <Image
//               src={Data[currentIndex].image}
//               width={352}
//               height={424}
//               alt={Data[currentIndex].name}
//               className="relative -mt-20"
//             />

//             <div className="flex flex-col items-start">
//               {/* آیکون کاربر و نظر */}
//               <div className="flex items-center gap-5">
//                 <Image
//                   src={TagIcon}
//                   width={55}
//                   height={55}
//                   alt="User Icon"
//                   className="mt-5"
//                 />

//                 <div
//                   className="w-[500px] h-[150px] p-5 bg-cover"
//                   style={{ backgroundImage: `url(${BackgroundComment.src})` }}
//                 >
//                   <h3 className="font-bold text-lg">{Data[currentIndex].name}</h3>
//                   <p>{Data[currentIndex].comment}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* فلش سمت چپ */}
//         <button onClick={goToNext} className="absolute right-10 top-1/2 transform -translate-y-1/2">
//           <Image src={ArrowLeft} width={24} height={24} alt="Next" />
//         </button>
//       </div>
//     </Fragment>
//   );
// };

// export default UserComment;


