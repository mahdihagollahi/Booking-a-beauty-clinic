"use client";

import React, { useState } from "react";
import Image from "next/image";
import IconUser from "@/assent/Img/Service/userRate.svg";
import adminComment from "@/assent/Img/Service//adminComment.svg";
import IconDown from "@/assent/Img/Service/arrowDown.svg";

interface message {
  name: string;
  date: string;
  rating: string;
  text: string;
  replies: string;
}

const Comments: React.FC<message> = ({ name, date, rating, text, replies }) => {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <div className="bg-white w-[999px]  rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image src={IconUser} width={24} height={24} alt="" />
          <span className="font-semibold mr-2 text-gray-800">{name}</span>
        </div>
        <div className="flex items-center">
          {Array.from({ length: rating }).map((_, index) => (
            <svg
              key={index}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.431 8.2 1.192-5.933 5.782 1.4 8.155L12 18.897l-7.334 3.85 1.4-8.155L.133 9.21l8.2-1.192L12 .587z" />
            </svg>
          ))}
          <span className="mr-2 text-gray-500 text-sm">{date}</span>
        </div>
      </div>

      <p className="text-gray-600 mt-2">{text}</p>

      <button
        onClick={() => setShowReplies(!showReplies)}
        className="text-pink-600 duration-300 flex items-center text-sm mt-2"
      >
        <Image
          src={IconDown}
          width={20}
          height={20}
          alt="Toggle Replies Icon"
          className={`ml-1 transform transition-transform duration-300 ${
            showReplies ? "rotate-0" : "-rotate-180"
          }`}
        />
        <span>{showReplies ? "مشاهده پاسخ ادمین" : "مشاهده پاسخ ادمین"}</span>
      </button>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          showReplies ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        {showReplies && (
          <div className="mt-4">
            {replies.map((reply, index) => (
              <div
                key={index}
                className="bg-white duration-300 p-3 rounded-lg "
              >
                <Image
                  src={adminComment}
                  width={19}
                  height={103}
                  alt=""
                  className="absolute -mr-1 -mt-2"
                />
                <div className="flex items-center mr-2 mb-2 justify-between">
                  <span className="bg-[#DC1E7A] text-white p-2  rounded-md font-regular text-sm">
                    {reply.adminName}
                  </span>
                </div>
                <span className="text-[#393939] text-sm mr-4 ">
                  {reply.replier}
                </span>
                <p className="text-[#393939] mr-4 border-[#A5A5A5] pr-2 border-r-2  mt-[1%]">
                  پاسخ به{" "}
                  <span className="font-regular text-base text-[#E34B95]">
                    {reply.user}
                  </span>
                </p>
                <p className="text-[#393939] mr-2  pr-2   mt-[2%]">
                  {reply.text}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const App = () => {
  const comments = [
    {
      name: "مونا کریمی",
      date: "15 تیر 1403",
      rating: 2,
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
      replies: [
        {
          adminName: "ادمین کلینیک نورانید",
          replier: "علی ملکی",
          user: "امیر رستمی",
          text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک.",
        },
      ],
    },

    {
      name: "مونا کریمی",
      date: "15 تیر 1403",
      rating: 3,

      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.",
      replies: [
        {
          adminName: "ادمین کلینیک نورانید",
          replier: "علی ملکی",
          user: "امیر رستمی",
          text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک.",
        },
      ],
    },

    {
      name: "مونا کریمی",
      date: "15 تیر 1403",
      rating: 4,
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
      replies: [
        {
          adminName: "ادمین کلینیک نورانید",
          replier: "علی ملکی",
          user: "امیر رستمی",
          text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک.",
        },
      ],
    },

    {
      name: "مونا کریمی",
      date: "15 تیر 1403",
      rating: 1,
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
      replies: [
        {
          adminName: "ادمین کلینیک نورانید",
          replier: "علی ملکی",
          user: "امیر رستمی",
          text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک.",
        },
      ],
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      {comments.map((comment, index) => (
        <Comments key={index} {...comment} />
      ))}
    </div>
  );
};

export default App;
