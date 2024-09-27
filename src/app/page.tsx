import AboutMe from '@/Component/Landing/AboutMe'
import Footer from '@/Component/Landing/Footer'
import Navbar from '@/Component/Landing/Navbar'
import ReservationServicePart from '@/Component/Landing/ReservationServicePart'
import Services from '@/Component/Landing/Services'
import WhyMe from '@/Component/Landing/WhyMe'
import  BeautyService  from '@/Component/Landing/‌BeautyService'
import Doctor from '@/Component/Landing/Doctor'
import ContactWithCustomer from '@/Component/Landing/ContactWithCustomer'

// import SingIn from '@/Component/Login/SingIn'
// import SingIn2 from '@/Component/Login/SingIn2'
// import LogIn1 from '@/Component/LogIn/LogIn1'
// import SingIn3 from '@/Component/SingIn/SingIn3'
// import AboutUsDiscription from "@/Component/AboutUs/AboutUsDiscription";
// import DetailArticle from "@/Component/Article/DetailArticle";
// import Doctor from "@/Component/Doctors/Doctors";
// import FishPeyment from "@/Component/Reservation/FishPeyment";
// import Information from "@/Component/Reservation/Information";
// import Payment from "@/Component/Reservation/Payment";
// import SelectService from "@/Component/Reservation/SelectService";
// import Service from "@/Component/Reservation/Service";
// import SetTimeAndDate from "@/Component/Reservation/SetTimeAndDate";
// import ShowService from "@/Component/Service/ShowService";
// import ChangePasswordModal from "@/Component/UserDashboard/component/ChangePasswordModal";
// import MyTurnComponent from "@/Component/UserDashboard/component/MyTurnComponent";
// import MyComment from "@/Component/UserDashboard/MyComment";
// import MyTurn from "@/Component/UserDashboard/MyTurn";
// import Profile from "@/Component/UserDashboard/Profile";

import React, { Fragment } from "react";
import SampleWork from '@/Component/Landing/SampleWork'
import LogoutModal from '@/Component/UserDashboard/component/LogoutModal';
import UserComment from '@/Component/Landing/UserComent/UserComment'
import FAQ from '@/Component/Landing/FAQ/FAQ'
import NoranidNews from '@/Component/Landing/NoranidNews'

function page() {
  return (
    <Fragment >
      <Navbar/>
      <ReservationServicePart/>
      <AboutMe/>
      <Services/>
      <WhyMe/>
      <BeautyService/>
      <Doctor/>
    
      <ContactWithCustomer/>
      <SampleWork/>
      <UserComment/>
      <FAQ/>
      <NoranidNews/>           
      <Footer/>

      {/* <SingIn/> */}
      {/* <SingIn2/> */}
      {/* <SingIn3/> */}
      {/* <LogIn1/> */}

      {/* <Service/> */}
      {/* <SelectService/> */}
      {/* <SetTimeAndDate/> */}
      {/* <Information/> */}
      {/* <Payment/> */}
      {/* <FishPeyment/> */}

      {/* <Doctor/> */}

      {/* <ShowService/> */}
      {/* 
      <AboutUsDiscription/> */}

      {/* <DetailArticle/> */}

      {/* <Profile/> */}

      {/* <MyTurn /> */}

      {/* <MyComment/> */}
      
    </Fragment>
  );
}

export default page;
