import React from "react";
const DoctorCard = ({ name, specialty, imgSrc }) => (
    <div className="flex items-center mb-4">
      <img className="w-12 h-12 rounded-full object-cover" src={imgSrc} alt={name} />
      <div className="ml-4">
        <h3 className="text-sm font-semibold">{name}</h3>
        <p className="text-xs text-gray-500">{specialty}</p>
      </div>
    </div>
  );
  export default DoctorCard;