import React, { useState } from "react";
import ArrowRight from "@/assent/Img/AdminDashboard/arrowRight.svg";
import ArrowLeft from "@/assent/Img/AdminDashboard/arrowLeft.svg";
import arrowRightTurn from "@/assent/Img/AdminDashboard/arrowRightTurn.svg";
import arrowLeftTurn from "@/assent/Img/AdminDashboard/arrowLeftTurn.svg";
import Image from "next/image";
import clockIcon from '@/assent/Img/AdminDashboard/clockّIcon.svg'

const AppointmentDetails = ({
  data,
  selectedWeek,
  handlePrevWeek,
  handleNextWeek,
}) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const selectedCategory = data.categories[selectedCategoryIndex]?.name;

  const handleNextCategory = () => {
    setSelectedCategoryIndex((prevIndex) =>
      prevIndex < data.categories.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevCategory = () => {
    setSelectedCategoryIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : data.categories.length - 1
    );
  };

  const filteredTimes = selectedCategory
    ? data.categories.find((category) => category.name === selectedCategory)
        ?.weeks[selectedWeek]
    : selectedDoctor
    ? data.doctors.find((doctor) => doctor.name === selectedDoctor)?.weeks[
        selectedWeek
      ]
    : [];

  return (
    <div>
      <div className="flex items-center mt-4 justify-between">
        <Image
          src={ArrowRight}
          width={20}
          height={20}
          className="cursor-pointer"
          alt=""
          onClick={handlePrevCategory}
        />

        {data?.categories?.map((category, index) => (
          <p
            key={category.name}
            className={`mb-1 cursor-pointer ${
              selectedCategory === category.name ? "text-[#DC1E7A]" : ""
            }`}
            onClick={() => setSelectedCategoryIndex(index)}
          >
                {category.name}
          </p>
        ))}

        <Image
          src={ArrowLeft}
          width={20}
          height={20}
          className="cursor-pointer"
          alt=""
          onClick={handleNextCategory}
        />
      </div>

      <div className="flex items-center mt-4 gap-5">
        {data?.doctors?.map((doctor) => (
          <p
            key={doctor.name}
            className={`mb-1 cursor-pointer ${
              selectedDoctor === doctor.name ? "text-pink-500" : ""
            }`}
            onClick={() => setSelectedDoctor(doctor.name)}
          >
            {doctor.name}
          </p>
        ))}
      </div>

      <div className="flex justify-end gap-3">
        <button onClick={handlePrevWeek} className="flex gap-1 items-center">
          <Image src={arrowRightTurn} width={20} height={20} alt="" />
          هفته قبل
        </button>
        <button
          onClick={handleNextWeek}
          className="flex mr-4 gap-1 items-center"
        >
          هفته بعد
          <Image src={arrowLeftTurn} width={20} height={20} alt="" />
        </button>
      </div>

    

      <div className="grid grid-cols-1 items-center ">
        {Object.keys(filteredTimes).map((day) => (
          <div key={day} className="mb-4 flex items-center m-6 gap-4">
            <p className="text-base font-medium mb-2">{day}</p>

            <div className="grid grid-cols-6 gap-32 items-center ">
              {filteredTimes[day].map((timeSlot, index) => (
                <div
                  key={index}
                  className={`p-4 w-28 h-16 rounded-lg text-center text-base font-medium flex items-center justify-center ${
                    timeSlot.reserved
                      ? "bg-[#D20404] text-white"
                      : "bg-[#F4F4F4] text-[#393939]"
                  }`}
                >
               
                 
                  {timeSlot.time}{" "}
                  {!timeSlot.reserved && (
                    <Image
                      src={clockIcon}
                      width={16}
                      height={16}
                      alt="Clock Icon"
                      className="mr-2"
                    />
                  )}
                  {timeSlot.reserved ? "نوبت پر شده" : ""}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default AppointmentDetails;



