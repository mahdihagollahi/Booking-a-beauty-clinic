// import React, { Fragment } from "react";
// import Image from "next/image";
// import LoginImage from "@/assent/Img/Login/LoginPagePhoto.svg";
// import IconImage from "@/assent/Img/Landing/Vector.svg";
// function SingIn() {
//   return (
//     <Fragment>
//       <div className="flex h-screen">
//         <div className="w-1/2 flex flex-col items-center justify-center pl-16 -pl-10 mb-28 mr-36">
//           <div className="flex items-center justify-center gap-3 mb-8">
//             <Image src={IconImage} width={30} height={30} alt="logo" />
//             <h2 className="font-bold text-xl text-[#DC1E7A]">نورانید</h2>
//           </div>

//           <p
//             className="font-medium text-center mb-6 mt-10 ml-[60%] whitespace-nowrap"
//             style={{ display: "inline-block" }}
//           >
//             آیا حساب کاربری دارید ؟
//             <span className="text-[#4BB09C] mr-2 cursor-pointer">
//               وارد شوید
//             </span>
//           </p>

//           <input
//             type="text"
//             placeholder="شماره تماس"
//             className="w-full p-4 mb-4 border border-gray-300 rounded-lg mt-4"
//           />

//           <button className="w-full bg-[#DC1E7A] text-white py-4 rounded-lg mt-4">
//             دریافت کد
//           </button>
//         </div>
//         <div className="w-1/2 relative">
//           <Image
//             src={LoginImage}
//             layout="fill"
//             objectFit="cover"
//             alt="Login Background"
//             className="rounded-r-[5%] mr-20"
//           />
//         </div>
//       </div>
//     </Fragment>
//   );
// }

// export default SingIn;




// import React, { Fragment } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import LoginImage from "@/assent/Img/Login/LognModal.svg";
// import IconImage from "@/assent/Img/Landing/Vector.svg";

// interface ModaloutProps {
//   handleCloseModal: () => void;
// }
// const SingIn: React.FC<ModaloutProps> = (handleCloseModal) => {
//   const handleFocus = () => {
//     document.documentElement.lang = "en";
//   };
//   return (
//     <Fragment>
//       <div className=" flex justify-center items-center mt-[15%]">
//         <div className="px-10 py-10  pb-32 rounded-r-[4.5%] rounded-l-[4.5%]"
//         style={{backgroundImage: `url(${LoginImage.src})`,
//           backgroundSize: 'cover',
//         }}
        
//         >
//           <div className="flex items-center justify-center gap-3 mt-10">
//             <Image src={IconImage} width={30} height={30} alt="logo" />
//             <h2 className="font-bold text-xl text-[#DC1E7A]">نورانید</h2>
//           </div>

//           <p
//             className="font-medium text-center mb-6 mt-32 ml-[60%] text-white whitespace-nowrap"
//             style={{ display: "inline-block" }}
//           >
//             آیا حساب کاربری دارید ؟
//             <span className="text-[#4BB09C] mr-2 cursor-pointer">
//               وارد شوید
//             </span>
//           </p>

//           <input
//             type="text"
//             placeholder="09192803715"
//             className="w-full p-4 mb-4 border border-gray-300 rounded-lg mt-4"
//             onFocus={handleFocus}
//           />
//           {/* <Link > */}
//           <button 
//            className="w-full bg-[#DC1E7A]  text-white py-4 rounded-lg mt-36 " 
//            onClick={handleCloseModal}
//            >
//             دریافت کد
//           </button>
//           {/* </Link> */}
//         </div>
       
//       </div>
//     </Fragment>
//   );
// }

// export default SingIn;




import React,{useState} from "react";
import Image from "next/image";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import LoginImage from "@/assent/Img/Login/LognModal.svg";
import IconImage from "@/assent/Img/Landing/Vector.svg";
import Link from "next/link";
import SingIn3 from "./SingIn3";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

interface SingInProps {
  handleCloseModal: () => void;
}

const SingIn: React.FC<SingInProps> = ({ handleCloseModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFocus = () => {
    document.documentElement.lang = "en";
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center mt-[15%] relative z-50">
      <div
        className="px-10 py-10 pb-32 rounded-r-[4.5%] rounded-l-[4.5%]"
        style={{
          backgroundImage: `url(${LoginImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex items-center justify-center gap-3 mt-10">
          <Image src={IconImage} width={30} height={30} alt="logo" />
          <h2 className="font-bold text-xl text-[#DC1E7A]">نورانید</h2>
        </div>

        <p
          className="font-medium text-center mb-6 mt-32 text-white"
          style={{ display: "inline-block" }}
        >
          آیا حساب کاربری دارید؟{" "}
          <span className="text-[#4BB09C] cursor-pointer">
            وارد شوید
          </span>
        </p>

        <input
          type="text"
          placeholder="09192803715"
          className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
          onFocus={handleFocus}
        />

<InputOTP className="" maxLength={4} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
      <InputOTPGroup className="text-white mr-32 my-2  "
      style={{direction:'ltr'}}
      >
        <InputOTPSlot   index={0} />
        <InputOTPSlot  index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
       
        <button
          className="w-full bg-[#DC1E7A] text-white py-4 rounded-lg mt-4"
       
        >
          دریافت کد
        </button>
     
      </div>
    </div>
  );
};

export default SingIn;




