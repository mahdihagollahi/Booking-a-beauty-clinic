import AboutMe from '@/Component/Landing/AboutMe'
import Footer from '@/Component/Landing/Footer'
import Navbar from '@/Component/Landing/Navbar'
import ReservationServicePart from '@/Component/Landing/ReservationServicePart'
import Services from '@/Component/Landing/Services'
import WhyMe from '@/Component/Landing/WhyMe'
import  BeautyService  from '@/Component/Landing/‌BeautyService'
// import SingIn from '@/Component/Login/SingIn'
import React from 'react'

function page() {
  return (
    <div >
      <Navbar/>
      <ReservationServicePart/>
      <AboutMe/>
      <Services/>
      <WhyMe/>
      <BeautyService/>
      {/* <SingIn/> */}
      <Footer/>
    </div>
  )
}

export default page