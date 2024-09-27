import React, { Fragment } from "react";

import AboutMe from "@/Component/Landing/AboutMe";
import Footer from "@/Component/Landing/Footer";
import Navbar from "@/Component/Landing/Navbar";
import ReservationServicePart from "@/Component/Landing/ReservationServicePart";
import Services from "@/Component/Landing/Services";
import WhyMe from "@/Component/Landing/WhyMe";
import BeautyService from "@/Component/Landing/‌BeautyService";
import Doctor from "@/Component/Landing/Doctor";
import ContactWithCustomer from "@/Component/Landing/ContactWithCustomer";
import SampleWork from "@/Component/Landing/SampleWork";
import UserComment from "@/Component/Landing/UserComent/UserComment";
import FAQ from "@/Component/Landing/FAQ/FAQ";
import NoranidNews from "@/Component/Landing/NoranidNewsLanding";

// import SingIn from '@/Component/Login/SingIn'
// import SingIn2 from '@/Component/Login/SingIn2'
// import LogIn1 from '@/Component/LogIn/LogIn1'
// import SingIn3 from '@/Component/SingIn/SingIn3'
// import DetailArticle from "@/Component/Article/DetailArticle";

function page() {
  return (
    <Fragment>
      <Navbar />
      <ReservationServicePart />
      <AboutMe />
      <Services />
      <WhyMe />
      <BeautyService />
      <Doctor />

      <ContactWithCustomer />
      <SampleWork />
      <UserComment />
      <FAQ />
      <NoranidNews />
      <Footer />

      {/* <SingIn/> */}
      {/* <SingIn2/> */}
      {/* <SingIn3/> */}
      {/* <LogIn1/> */}

      {/* <ShowService/> */}

      {/* <AboutUsDiscription/> */}

      {/* <DetailArticle/> */}
    </Fragment>
  );
}

export default page;
