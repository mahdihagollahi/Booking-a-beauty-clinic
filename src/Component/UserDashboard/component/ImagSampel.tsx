"use client";
import React, { useState } from "react";
import Image from "next/image";

const ImagSampel = () => {
  const [images, setImages] = useState([null, null, null, null]);
  const sampel = [
    { text: "بارگذاری تصویر اول:" },
    { text: "بارگذاری تصویر دوم:" },
    { text: "بارگذاری تصویر سوم:" },
    { text: "بارگذاری تصویر چهارم:" },
  ];

  const handleFileDrop = (e, index) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedImages = [...images];
        updatedImages[index] = reader.result;
        setImages(updatedImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileSelect = (e, index) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedImages = [...images];
        updatedImages[index] = reader.result;
        setImages(updatedImages);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="flex flex-row justify-around">
        {sampel.map((test, index) => (
          <div key={index} className="flex flex-col gap-3 items-center">
            <div>
            <span className="-mr-24">{test.text}</span>
            </div>
            <div
              className="relative w-60 h-32 rounded-xl bg-[#FFF2F8] border-2 border-dashed flex items-center justify-center cursor-pointer"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleFileDrop(e, index)}
            >
              {images[index] ? (
                <img
                  src={images[index]}
                  alt={`Uploaded ${index}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleFileSelect(e, index)}
                    id={`file-input-${index}`}
                  />
                  <button
                    onClick={() =>
                      document.querySelectorAll("input[type='file']")[index].click()
                    }
                    className="absolute text-4xl text-gray-400"
                  >
                    +
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

export default ImagSampel;
