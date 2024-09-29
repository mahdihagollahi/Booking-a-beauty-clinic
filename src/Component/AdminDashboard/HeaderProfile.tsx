import React from "react";

const HeaderProfile = () => {
  return (
    <div className="relative bg-pink-300 h-40">
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <img
          className="w-24 h-24 rounded-full border-4 border-white"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
      </div>
    </div>
  );
};
export default HeaderProfile;
