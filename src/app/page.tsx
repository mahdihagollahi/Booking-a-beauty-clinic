import AboutMe from '@/Component/Landing/AboutMe'
import Navbar from '@/Component/Landing/Navbar'
import ReservationServicePart from '@/Component/Landing/ReservationServicePart'
import Services from '@/Component/Landing/Services'
// import SingIn from '@/Component/Login/SingIn'
import React from 'react'

function page() {
  return (
    <div >
      <Navbar/>
      <ReservationServicePart/>
      <AboutMe/>
      <Services/>
      {/* <SingIn/> */}
    </div>
  )
}

export default page