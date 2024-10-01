// "use client";
// import React, { Fragment, useState } from "react";
// import Image from "next/image";
// import Logo from "@/assent/Img/UserDashboard/Logo.svg";
// import LogOut from "@/assent/Img/UserDashboard/logout.svg";
// import UserProfile from "@/assent/Img/UserDashboard/UserProfile.svg";
// import NavbarData from "./NavbarData";
// import Link from "next/link";
// import Modal from "./Modal";
// import LogoutModal from "./LogoutModal";
// import { usePathname } from "next/navigation";

// const Navbar = () => {
//   const navbar = NavbarData().Navbar;
//   const [hoverImage, setHoverImage] = useState<{ [key: number]: boolean }>({});
//   const [clickedItems, setClickedItems] = useState<number | null>(null);
//   const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
   
//  const pathName = usePathname();

//   const handleMouseEnter = (id: number) => {
//     setHoverImage((prev) => ({ ...prev, [id]: true }));
//   };

//   const handleMouseLeave = (id: number) => {
//     setHoverImage((prev) => ({ ...prev, [id]: false }));
//   };

//   const handelClick = (id: number) => {
//     setClickedItems(id);
//   };

  

//   const handleOpenModal = () => {
//     console.log("Opening modal...");
//     setIsModalVisible(true);
//   };

//   const handleCloseModal = () => {
//     console.log("Closing modal...");
//     setIsModalVisible(false);
//   };

//   return (
//     <Fragment>
//       <div className="bg-[#EA78AF]  w-60 py-10 h-full rounded-l-[50px]">
//         <div className="flex items-center gap-2 justify-center">
//           <Image src={Logo} width={30} height={30} alt="" />

//           <p className="font-bold text-xl text-[#FFFFFF]">نورانید</p>
//         </div>
//         <div className="flex items-center mt-20 gap-3 justify-center">
//           <div>
//             <Image src={UserProfile} width={60} height={60} alt="" />
//           </div>

//           <div>
//             <p className="font-medium text-base text-[#FFFFFF]">
//               محدثه حاجی زاده
//             </p>
//             <p
//               className="font-regular ml-2 mt-1 text-base text-[#FFFFFF]"
//               style={{ direction: "ltr" }}
//             >
//               0923 209 3249
//             </p>
//           </div>
//         </div>
//         <div>
//           <div className="mt-20 px-5 flex flex-col gap-10 ">
//             {navbar.map((items, index) => (
//               <div
//               style={pathName === items.link ? { color: "#DC1E7A" } : {}}
//                 key={index}
//                 className={`bg-inherit rounded-r-lg py-2  px-1 w-[111%] ${
//                 pathName== items.link
//                     ? " border-r-2 bg-pink-100 border-[#DC1E7A] text-[#DC1E7A] rounded-md"
//                     : "bg-[#DC1E7A]"
//                 } hover:bg-[#FCE9F2] hover:border-r-2 hover:text-[#DC1E7A] hover:border-[#DC1E7A] hover:rounded-md `}
               
//               >
//                 <Link href={items.link} passHref>
//                   <div className="flex items-center gap-3  "
                   
//                   >
//                     <Image
//                       src={
//                        pathName === items.link
//                           ? items.imageHover
//                           : items.image
//                       }
//                       width={24}
//                       height={24}
//                       alt=""
//                     />
//                     <p
//                       className={`font-demiBold   whitespace-nowrap text-base ${
//                         hoverImage[index] || pathName === items.link
//                           ? "text-[#DC1E7A] "
//                           : "text-[#FFFFFF]"
//                       } `}
//                     >
//                       {items.title}
//                     </p>
//                   </div>
//                 </Link>
//               </div>
//             ))}

//             <button className="flex items-center mt-20 rounded-r-lg py-2 px-1 w-[111%] gap-3 text-[#DC1E7A] bg-[#FCE9F2]  border-r-2 border-[#DC1E7A] rounded-md"
//                onClick={handleOpenModal}
//             >
//               <Image src={LogOut} width={24} height={24} alt="" />
//               خروج از حساب کاربری
//             </button>
//           </div>
//         </div>
//         <Modal isVisible={isModalVisible} >
//         <LogoutModal handleCloseModal={handleCloseModal} />
//         </Modal>
//       </div>
//     </Fragment>
//   );
// };

// export default Navbar;



"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import Logo from "@/assent/Img/UserDashboard/Logo.svg";
import LogOut from "@/assent/Img/UserDashboard/logout.svg";
import UserProfile from "@/assent/Img/UserDashboard/UserProfile.svg";
import NavbarData from "./NavbarData";
import Link from "next/link";
import Modal from "./Modal";
import LogoutModal from "./LogoutModal";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const navbar = NavbarData().Navbar;
  const [hoverImage, setHoverImage] = useState<{ [key: number]: boolean }>({});
  const [clickedItems, setClickedItems] = useState<number | null>(null);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const pathName = usePathname();

  const handleMouseEnter = (id: number) => {
    setHoverImage((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id: number) => {
    setHoverImage((prev) => ({ ...prev, [id]: false }));
  };

  const handelClick = (id: number) => {
    setClickedItems(id);
  };

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <Fragment>
      <div className="bg-[#EA78AF] w-60 py-10 h-full rounded-l-[50px]">
        <div className="flex items-center gap-2 justify-center">
          <Image src={Logo} width={30} height={30} alt="" />
          <p className="font-bold text-xl text-[#FFFFFF]">نورانید</p>
        </div>
        <div className="flex items-center mt-20 gap-3 justify-center">
          <div>
            <Image src={UserProfile} width={60} height={60} alt="" />
          </div>

          <div>
            <p className="font-medium text-base text-[#FFFFFF]">
              محدثه حاجی زاده
            </p>
            <p
              className="font-regular ml-2 mt-1 text-base text-[#FFFFFF]"
              style={{ direction: "ltr" }}
            >
              0923 209 3249
            </p>
          </div>
        </div>
        <div>
          <div className="mt-20 px-5 flex flex-col gap-10 ">
            {navbar.map((items, index) => (
              <div
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className={`bg-inherit rounded-r-lg py-2 px-1 w-[111%] ${
                  pathName === items.link
                    ? "border-r-2 bg-pink-100 border-[#DC1E7A] text-[#DC1E7A] rounded-md"
                    : "bg-[#DC1E7A]"
                } hover:bg-[#FCE9F2] hover:border-r-2 hover:text-[#DC1E7A] hover:border-[#DC1E7A] hover:rounded-md`}
              >
                <Link href={items.link} passHref>
                  <div className="flex items-center gap-3">
                    <Image
                      src={
                        hoverImage[index] || pathName === items.link
                          ? items.imageHover
                          : items.image
                      }
                      width={24}
                      height={24}
                      alt=""
                    />
                    <p
                      className={`font-demiBold whitespace-nowrap text-base ${
                        hoverImage[index] || pathName === items.link
                          ? "text-[#DC1E7A]"
                          : "text-[#FFFFFF]"
                      } hover:text-[#DC1E7A]`}
                    >
                      {items.title}
                    </p>
                  </div>
                </Link>
              </div>
            ))}

            <button
              className="flex items-center mt-20 rounded-r-lg py-2 px-1 w-[111%] gap-3 text-[#DC1E7A] bg-[#FCE9F2]  border-r-2 border-[#DC1E7A] rounded-md"
              onClick={handleOpenModal}
            >
              <Image src={LogOut} width={24} height={24} alt="" />
              خروج از حساب کاربری
            </button>
          </div>
        </div>
        <Modal isVisible={isModalVisible}>
          <LogoutModal handleCloseModal={handleCloseModal} />
        </Modal>
      </div>
    </Fragment>
  );
};

export default Navbar;

