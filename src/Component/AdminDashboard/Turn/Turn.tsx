"use client";
import React, { Fragment, useState } from "react";
import AppointmentDetails from "./TurnDetail";
import TurnData from "./TurnData";
import RoutButton from "./RoutButton";
import WelcomePanel from "@/Component/AdminDashboard/Dashboard/HeaderDashboard";
import NavbarDashboard from "@/Component/AdminDashboard/Navbar/NavbarDashboard";
import TurnFilter from "./TurnFilter";

const Turn = () => {
  const [selectedService, setSelectedService] = useState("تزریقات زیبایی");
  const [selectedWeek, setSelectedWeek] = useState("week1");

  const servicesData = TurnData();

  const handleNextWeek = () => {
    if (selectedWeek === "week1") {
      setSelectedWeek("week2");
    }
  };

  const handlePrevWeek = () => {
    if (selectedWeek === "week2") {
      setSelectedWeek("week1");
    }
  };

  return (
    <Fragment>
      <WelcomePanel />

      <div>
        <NavbarDashboard />
      </div>

      <div className="w-[73.5%] h-[100%] shadow  rounded-2xl py-6 px-4  mr-80 -mt-[57%] bg-white ml-72">
        <p className="font-medium text-xl text-[#393939]">نوبت ها</p>
        <div className="flex  justify-between items-center mt-6">
            <div>
            <RoutButton setSelectedService={setSelectedService} />
            </div>
            <div>
            <TurnFilter/>
            </div>
        </div>

        {/* <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={handlePrevWeek}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
        >
          هفته قبل
        </button>
        <button
          onClick={handleNextWeek}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
        >
          هفته بعد
        </button>
      </div> */}

  
      <AppointmentDetails
        data={servicesData[selectedService]} 
        selectedWeek={selectedWeek}
      />
      </div>


    
    </Fragment>
  );
};

export default Turn;
