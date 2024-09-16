import React, { useState } from "react";
import SingIn from "@/Component/SingIn/SingIn";
import SingIn3 from "@/Component/SingIn/SingIn3";

const Authentication: React.FC = () => {
  const [currentComponent, setCurrentComponent] = useState("SingIn"); // برای کنترل نمایش کامپوننت

  const switchToSingIn3 = () => {
    setCurrentComponent("SingIn3"); // تغییر به SingIn3
  };

  return (
    <div>
      {currentComponent === "SingIn" && (
        <SingIn handleCloseModal={switchToSingIn3} /> // نمایش SingIn
      )}
      {currentComponent === "SingIn3" && <SingIn3 />} // نمایش SingIn3
    </div>
  );
};

export default Authentication;
