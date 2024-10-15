import NavbarDashboard from "@/Component/AdminDashboard/Navbar/NavbarDashboard";
import WelcomePanel from "@/Component/AdminDashboard/Dashboard/HeaderDashboard";
import React, { Fragment } from "react";
import ProfileCard from "@/Component/AdminDashboard/ProfileCard";
import ReservationChart from "@/Component/AdminDashboard/Dashboard/ReservationChart";
import SatisfactionChart from "@/Component/AdminDashboard/SatisfactionChart";
import ViewMoreButton from "@/Component/AdminDashboard/ViewMoreButton";
import NumberUserReviews from "@/Component/AdminDashboard/Dashboard/NumberUserReviews";
import VisitTheSite from "@/Component/AdminDashboard/Dashboard/VisitTheSite";
import TotalReservations from "@/Component/AdminDashboard/Dashboard/TotalReservations";
import SumUsers from "@/Component/AdminDashboard/Dashboard/SumUsers";
import SumSale from "@/Component/AdminDashboard/Dashboard/SumSale";
import DoctorShow from "@/Component/AdminDashboard/Dashboard/DoctorShow";
import SalesChart from "@/Component/AdminDashboard/Dashboard/SalesChart";

const page = () => {
  return (
    <Fragment>
      <div className="relative">
        <WelcomePanel />
       
        <NavbarDashboard />
   
        <div className="absolute mr-72 bottom-[32.5rem]">
          <NumberUserReviews />
        </div>

        <div className="flex items-center gap-3 absolute bottom-[48rem] mr-[19rem] ">
          <VisitTheSite />
          <TotalReservations />
          <SumUsers />
          <SumSale />
        </div>
        <DoctorShow />
        <SalesChart />
        <div className=" md:mr-[18rem] md:-mt-[28rem]   md:absolute">
          <ReservationChart />
        </div>
      </div>
    </Fragment>
  );
};

export default page;
