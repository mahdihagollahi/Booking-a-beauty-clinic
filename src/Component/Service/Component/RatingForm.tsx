"use client";
import { useState } from "react";

function RatingForm() {
  const [rating, setRating] = useState(null);
  const [review, setReview] = useState("");

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Rating:", rating);
    console.log("Review:", review);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="bg-white pb-20 py-10 px-6 w-[50%] h-[100%] rounded-2xl shadow-md ">
        <h2 className="text-right text-lg mb-4">امتیاز خود را ثبت کنید.</h2>
        <div className="flex justify-center mb-4 ml-10">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              onClick={() => handleRating(star)}
              xmlns="http://www.w3.org/2000/svg"
              fill={star <= rating ? "#E9C600" : "none"}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 w-8 h-8 mr-6 cursor-pointer text-[#E9C600] hover:fill-[#E9C600]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label className="text-right font-medium text-base text-[#393939] mb-4 mr-1">متن نظر</label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="p-3 border rounded-md resize-none h-80 placeholder:font-medium placeholder:text-sm placeholder:text-[#393939]"
              maxLength={100}
              placeholder="برای ما بنویسید..."
            />
            <span className="text-right absolute text-sm font-medium text-[#BCBCBC] mt-[23%] mr-[43.5%]">{`${review.length}/100`}</span>
          </div>
          <button
            type="submit"
            className="w-full bg-[#EA78AF] text-white py-2 rounded-md mt-2 hover:bg-[#DC1E7A]"
          >
            ثبت امتیاز و نظر
          </button>
        </form>
      </div>
    </div>
  );
}

export default RatingForm;
