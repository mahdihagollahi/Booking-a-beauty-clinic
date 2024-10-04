"use client";
import React, { Fragment, useState, useRef } from "react";
import Background from "@/assent/Img/Landing/bgDoctor.svg";
import Image from "next/image";
import CommentData from "./CommentData";
import ArrowLeft from "@/assent/Img/Landing/ArrowLeft.svg";
import ArrowRight from "@/assent/Img/Landing/ArrowRight.svg";
import CommentUser from "./CommentUser";
import Flower from "@/assent/Img/Landing/flower.svg";

const UserComment = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const Data = CommentData().Comment;

  const commentListRef = useRef(null);

  const scrollAmount = 500;

  const goToNextScrol = () => {
    if (commentListRef.current) {
      commentListRef.current.scrollLeft += scrollAmount;
    }
  };

  const goToPreviousScrol = () => {
    if (commentListRef.current) {
      commentListRef.current.scrollLeft -= scrollAmount;
    }
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Data.length) % Data.length);
  };

  return (
    <div className="hidden md:block">
      <div className="mt-20 px-20">
      <div className=" mr-[67%] absolute mt-14">
        <Image src={Flower} width={52} height={58} alt="" />
      </div>
        <p className="font-medium text-[#3A3A3A] text-2xl text-right">
          نظرات کاربران
        </p>

        <Image
          src={Data[currentIndex].image}
          width={352}
          height={424}
          alt={Data[currentIndex].name}
          className="absolute z-10 mr-[60%]"
          style={{ zIndex: 40 }}
        />

        <div
          className="flex gap-1 items-center absolute z-10 mr-[56%] mt-96"
          style={{ zIndex: "50" }}
        >
          <button onClick={goToNextScrol} className="">
            <Image src={ArrowRight} width={24} height={24} alt="Previous" />
          </button>
          <button onClick={goToPreviousScrol} className="">
            <Image src={ArrowLeft} width={24} height={24} alt="Next" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center relative">
        <button
          onClick={goToNext}
          className="absolute left-10 top-64 transform -translate-y-1/2"
        >
          <Image src={ArrowLeft} width={24} height={24} alt="Next" />
        </button>

        <div
          className="w-[85%] h-[342px] mb-40 mt-20 flex justify-center relative bg-cover overflow-hidden "
          style={{
            backgroundImage: `url(${Background.src})`,
            direction: "rtl",
            zIndex: 10,
          }}
        >
          <div className="flex items-center gap-10 relative z-0">
            <CommentUser
              Data={Data}
              commentListRef={commentListRef}
              currentIndex={currentIndex}
            />

            <div
              className="w-[30%] h-[424px] relative z-10 -mt-20 ml-80"
              style={{ zIndex: 40 }}
            ></div>
          </div>
        </div>

        <button
          onClick={goToPrevious}
          className="absolute right-10 top-64 transform -translate-y-1/2"
        >
          <Image src={ArrowRight} width={24} height={24} alt="Previous" />
        </button>
      </div>
      <div className=" mr-[27%] absolute -mt-32">
        <Image src={Flower} width={52} height={58} alt="" />
      </div>
    </div>
  );
};

export default UserComment;
