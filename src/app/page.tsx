import AboutMe from '@/Component/Landing/AboutMe'
import Navbar from '@/Component/Landing/Navbar'
import ReservationServicePart from '@/Component/Landing/ReservationServicePart'
import Services from '@/Component/Landing/Services'
import WhyMe from '@/Component/Landing/WhyMe'
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
      {/* <SingIn/> */}
    </div>
  )
}

export default page