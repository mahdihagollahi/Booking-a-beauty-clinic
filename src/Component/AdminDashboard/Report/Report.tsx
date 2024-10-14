import React, { Fragment } from "react";
import WelcomePanel from "@/Component/AdminDashboard/Dashboard/HeaderDashboard";
import NavbarDashboard from "@/Component/AdminDashboard/Navbar/NavbarDashboard";

import ReportTable from "./ReportTable";
import FIlterReport from "./FIlterReport";

const Report = () => {
  return (
    <Fragment>
      <WelcomePanel />

      <div>
        <NavbarDashboard />
      </div>

      <div className="w-[73.5%] h-[100%] shadow  rounded-2xl py-6 px-4  mr-80 -mt-[57%] bg-white ml-72">
        <p className="font-medium text-xl text-[#393939]">گزارشات نوبت ها</p>

        <div className="mt-8 ">
          <FIlterReport/>
        </div>
       <div className="mt-20">

    
        <ReportTable />
        </div>
      </div>
    </Fragment>
  );
};

export default Report;
