import React, { Fragment } from "react";

import Navbar from "@/Component/Landing/Navbar";

import AboutMe from "@/Component/Landing/AboutMe";
import Footer from "@/Component/Landing/Footer";
import ReservationServicePart from "@/Component/Landing/ReservationServicePart";
import Services from "@/Component/Landing/Services";
import WhyMe from "@/Component/Landing/WhyMe";
import BeautyService from "@/Component/Landing/‌BeautyService";
import Doctor from "@/Component/Landing/Doctor";
import SampleWork from "@/Component/Landing/SampleWork";
import UserComment from "@/Component/Landing/UserComent/UserComment";
import FAQ from "@/Component/Landing/FAQ/FAQ";
import NoranidNews from "@/Component/Landing/NoranidNewsLanding";
import Article from "@/Component/Landing/Article";

// import SingIn from '@/Component/Login/SingIn'
// import SingIn2 from '@/Component/Login/SingIn2'
// import LogIn1 from '@/Component/LogIn/LogIn1'
import SingIn3 from "@/Component/SingIn/SingIn3";

function page() {
  return (
    <Fragment>
     

    
      <Navbar />
      <div className="relative">
      <ReservationServicePart />
      </div>
      <AboutMe />
      <Services />
      <WhyMe />
      <BeautyService />
      <Doctor />
      <div className="relative">
      <SampleWork />
      </div>
      <Article />
      <UserComment />
      <FAQ />
      <div className="relative">
      <NoranidNews />
      </div>
      <Footer />

   
      {/* <SingIn/> */}
      {/* <SingIn2/> */}
      {/* <SingIn3/> */}
      {/* <LogIn1/> */}
    </Fragment>
  );
}

export default page;
