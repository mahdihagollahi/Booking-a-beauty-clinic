"use client";

import React, { Fragment, useRef, useState } from "react";
import AddItems from "@/assent/Img/AdminDashboard/AddItems.svg";
import Image from "next/image";

const AddPhoto = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [error, setError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    setError("");
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      setError("هیچ فایلی انتخاب نشده است.");
      return;
    }

    if (file.type !== "image/jpeg" && file.type !== "image/jpg") {
      setError("لطفاً فقط فایل‌های با فرمت JPG انتخاب کنید.");
      setSelectedImage(null);
      return;
    }

    const maxSizeInBytes = 720 * 1024;
    if (file.size > maxSizeInBytes) {
      setError("حجم فایل نباید بیشتر از ۷۲۰ کیلوبایت باشد.");
      setSelectedImage(null);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    const img = new window.Image();

    img.src = objectUrl;

    img.onload = () => {
      const { width, height } = img;

      if (width > 119 || height > 289) {
        setError("ابعاد تصویر نباید بیشتر از ۱۱۹x۲۸۹ پیکسل باشد.");
        URL.revokeObjectURL(objectUrl);
        setSelectedImage(null);
      } else {
        setSelectedImage(objectUrl);
        setError("");
      }
    };

    img.onerror = () => {
      setError("خطایی در خواندن تصویر رخ داد.");
      URL.revokeObjectURL(objectUrl);
    };
  };
  return (
    <Fragment>
      <div className="bg-[#FFF2F8] w-[214px] h-[139px] mt-2">
        <div className="pt-5 pr-12">
          <input
            type="file"
            accept="image/jpeg, image/jpg"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          {selectedImage ? (
            <img
              src={selectedImage}
              width={19}
              height={89}
              alt="Selected"
              className="cursor-pointer object-cover"
              onClick={handleImageClick}
            />
          ) : (
            <Image
              src={AddItems}
              width={100}
              height={100}
              alt="Upload icon"
              className="cursor-pointer object-cover"
              onClick={handleImageClick}
            />
          )}
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      </div>
    </Fragment>
  );
};

export default AddPhoto;
