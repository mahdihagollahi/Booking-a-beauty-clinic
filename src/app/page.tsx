import Navbar from '@/Component/Landing/Navbar'
import ReservationServicePart from '@/Component/Landing/ReservationServicePart'
// import SingIn from '@/Component/Login/SingIn'
import React from 'react'

function page() {
  return (
    <div >
      <Navbar/>
      <ReservationServicePart/>
      {/* <SingIn/> */}
    </div>
  )
}

export default page