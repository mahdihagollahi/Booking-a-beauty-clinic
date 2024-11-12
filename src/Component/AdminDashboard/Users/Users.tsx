import React, { Fragment } from "react";
import WelcomePanel from "@/Component/AdminDashboard/Dashboard/HeaderDashboard";
import NavbarDashboard from "@/Component/AdminDashboard/Navbar/NavbarDashboard";
import SearchUser from "./SearchUser";
import UserTable from "./UserTable";

const Users = () => {
  return (
    <Fragment>
      <WelcomePanel />

      <div>
        <NavbarDashboard />
      </div>

      <div className="w-[73.5%] h-[118.5%] shadow  rounded-2xl py-6 px-4  mr-80 -mt-[67.5%] bg-white ml-72">
        <p className="font-medium text-xl text-[#393939]">کاربران</p>
        <SearchUser />
        <UserTable/>
      </div>
    </Fragment>
  );
};

export default Users;
