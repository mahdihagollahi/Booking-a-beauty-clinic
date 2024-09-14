import AboutMe from '@/Component/Landing/AboutMe'
import Footer from '@/Component/Landing/Footer'
import Navbar from '@/Component/Landing/Navbar'
import ReservationServicePart from '@/Component/Landing/ReservationServicePart'
import Services from '@/Component/Landing/Services'
import WhyMe from '@/Component/Landing/WhyMe'
import  BeautyService  from '@/Component/Landing/‌BeautyService'
import Doctor from '@/Component/Landing/Doctor'
// import SingIn from '@/Component/Login/SingIn'
import React from 'react'
import ContactWithCustomer from '@/Component/Landing/ContactWithCustomer'

function page() {
  return (
    <div >
      <Navbar/>
      <ReservationServicePart/>
      <AboutMe/>
      <Services/>
      <WhyMe/>
      <BeautyService/>
      <Doctor/>
      {/* <SingIn/> */}
      <ContactWithCustomer/>
      <Footer/>
    </div>
  )
}

export default page