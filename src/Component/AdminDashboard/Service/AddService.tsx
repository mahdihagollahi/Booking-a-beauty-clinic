"use client";

import React, { Fragment, useRef, useState } from "react";
import WelcomePanel from "@/Component/AdminDashboard/Dashboard/HeaderDashboard";
import NavbarDashboard from "@/Component/AdminDashboard/Navbar/NavbarDashboard";
import AddItems from "@/assent/Img/AdminDashboard/AddItems.svg";
import Image from "next/image";

const AddService = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <Fragment>
      <WelcomePanel />

      <div>
        <NavbarDashboard />
      </div>

      <div className="w-[73.5%] h-[100%] shadow rounded-2xl py-6 px-4 mr-80 -mt-[57%] bg-white ml-72">
        <p className="font-medium text-xl text-[#393939]">خدمات</p>
        <p className="font-medium text-lg text-[#393939] mt-6">
          بارگذاری تصویر :
        </p>
        <div className="bg-[#FFF2F8] w-[457px] h-[184px] mt-2">
          <div className="pt-10 pr-40">
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
              accept="image/*"
            />
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected"
                width={200}
                height={100}
              />
            ) : (
              <Image
                src={AddItems}
                width={100}
                height={100}
                alt="Placeholder"
                onClick={handleImageClick}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddService;
