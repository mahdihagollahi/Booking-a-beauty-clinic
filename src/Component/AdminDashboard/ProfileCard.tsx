import React from "react";
import DoctorCard from "./DoctorCard";
import HeaderProfile from "./HeaderProfile";
import ViewMoreButton from "./ViewMoreButton"
import SatisfactionChart from "./SatisfactionChart"

const ProfileCard = () => {
    return (
      <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* بخش هدر با تصویر پروفایل */}
        <HeaderProfile />
        
        {/* بخش اطلاعات پروفایل */}
        <div className="px-6 pt-16 pb-6 text-center">
          <h2 className="text-lg font-semibold">دکتر مثال</h2>
          <p className="text-sm text-gray-500">متخصص جراحی پلاستیک</p>
        </div>
  
        {/* لیست دکترها */}
        <div className="px-6 pb-6">
          <h3 className="text-md font-semibold mb-4">لیست دکترها</h3>
          <DoctorCard
            name="دکتر سامان گربیی"
            specialty="متخصص زیبایی و مو"
            imgSrc="https://via.placeholder.com/50"
          />
          <DoctorCard
            name="دکتر الناز فلاح"
            specialty="متخصص مغز و اعصاب"
            imgSrc="https://via.placeholder.com/50"
          />
          <DoctorCard
            name="دکتر امیررضا حنیف نیا"
            specialty="متخصص پوست و مو"
            imgSrc="https://via.placeholder.com/50"
          />
  
          {/* دکمه مشاهده بیشتر */}
          <ViewMoreButton />
  
          {/* نمودار درصد رضایت */}
          <SatisfactionChart />
        </div>
      </div>
    );
  };