import React, { Fragment } from "react";

const SetComment = ({serviceData , renderRatingStars , handleOpenModal}) => {
  return (
    <Fragment>
      <h4 className="font-medium text-xl text-[#393939]">دیدگاه‌ها</h4>

      <div className="flex items-center gap-2">
        <p className="font-medium text-sm mt-3">
          <span>{serviceData.feedback.rating} </span> از 5
        </p>
        <div className="flex">
          {renderRatingStars(serviceData.feedback.rating)}
        </div>
      </div>

      <div className="mt-4">
        <p className="font-medium text-sm text-[#393939]">
          {serviceData.feedback.message}
        </p>
        <button
          className="border border-[#DC1E7A] whitespace-nowrap w-36 py-2 px-4 rounded-md text-[#DC1E7A] mt-6 font-medium text-sm"
          onClick={handleOpenModal}
        >
          ثبت نظر
        </button>
      </div>
    </Fragment>
  );
};

export default SetComment;
