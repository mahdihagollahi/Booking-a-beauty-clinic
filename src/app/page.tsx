
import React,{Fragment} from "react";
import WelcomePanel from "@/Component/AdminDashboard/WelcomePanel";
import SalesChart from "@/Component/AdminDashboard/SalesChart";
import ReservationChart from "@/Component/AdminDashboard/ReservationChart"
import ButtonNavbar from "@/Component/AdminDashboard/ButtonNavbar";
import Navbar from "@/Component/AdminDashboard/Navbar";
// import ProfileCard from "@/Component/AdminDashboard/ProfileCard"
import SearchUser from "@/Component/AdminDashboard/SearchUser";
import ButtonRule from "@/Component/AdminDashboard/ButtonRule";


import AboutMe from "@/Component/Landing/AboutMe";
import Footer from "@/Component/Landing/Footer";
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


      // {/* <SingIn/> */}
      // {/* <SingIn2/> */}
      // {/* <SingIn3/> */}
      // {/* <LogIn1/> */}



    </Fragment>
  );

}

export default page;
