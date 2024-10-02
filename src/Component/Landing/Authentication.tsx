import React, { useState } from "react";
import SingIn from "@/Component/SingIn/SingIn";
import SingIn3 from "@/Component/SingIn/SingIn3";

const Authentication: React.FC = () => {
  const [currentComponent, setCurrentComponent] = useState("SingIn"); 

  const switchToSingIn3 = () => {
    setCurrentComponent("SingIn3"); 
  };

  return (
    <div>
      {currentComponent === "SingIn" && (
        <SingIn handleCloseModal={switchToSingIn3} /> 
      )}
      {currentComponent === "SingIn3" && <SingIn3 />} 
    </div>
  );
};

export default Authentication;
