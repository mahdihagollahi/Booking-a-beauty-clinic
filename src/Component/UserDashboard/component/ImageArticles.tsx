"use client";
import Image from "next/image";
import add from "@/assent/Img/UserDashboard/vuesax/add-square.png";
import React, { useState } from "react";

const ImageArticles = () => {
  const [images, setImages] = useState([null, null]);
  const [isUploaded, setIsUploaded] = useState([false, false]);

  const Imag = [
    { text: "بارگذاری تصویر اول:" },
    { text: "بارگذاری تصویر دوم:" },
  ];

  const handleFileSelect = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedImages = [...images];
        updatedImages[index] = reader.result;
        setImages(updatedImages);

        const updatedStatus = [...isUploaded];
        updatedStatus[index] = true;
        setIsUploaded(updatedStatus);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="flex flex-row justify-between">
        {Imag.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <span>{item.text}</span>
            <div className="relative flex items-center w-96 h-40 bg-[#FFF2F8] border-2 border-dashed cursor-pointer justify-center">
              {images[index] && (
                <img
                  src={images[index]}
                  alt="Uploaded"
                  className="w-full h-full object-cover rounded-md"
                />
              )}

              {!isUploaded[index] && (
                <>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleFileSelect(e, index)}
                  />
                  <button
                    className="absolute transform -translate-y-1/2 p-4 rounded-full"
                    style={{
                      top: "50%",
                      right: "50%",
                      transform: "translate(50%, -50%)",
                    }}
                    onClick={() =>
                      document
                        .querySelectorAll("input[type='file']")
                        [index].click()
                    }
                  >
                    <Image
                      className="border-2 border-dashed rounded-full p-4 w-16"
                      src={add}
                      alt="Upload"
                    />
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageArticles;
