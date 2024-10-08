import NavbarDashboard from "@/Component/AdminDashboard/Navbar/NavbarDashboard";
import WelcomePanel from "@/Component/AdminDashboard/Dashboard/HeaderDashboard";
import React, { Fragment } from "react";
import ProfileCard from "@/Component/AdminDashboard/ProfileCard";
import ReservationChart from "@/Component/AdminDashboard/ReservationChart";
import SatisfactionChart from "@/Component/AdminDashboard/SatisfactionChart";
import ViewMoreButton from "@/Component/AdminDashboard/ViewMoreButton";

const page = () => {
  return (
    <Fragment>
      <WelcomePanel />
      <NavbarDashboard />
        <ViewMoreButton/>
    </Fragment>
  );
};

export default page;
