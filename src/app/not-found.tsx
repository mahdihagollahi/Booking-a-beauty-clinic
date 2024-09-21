import React, { Fragment } from 'react'
import Navbar from "../Component/Landing/Navbar";
import Image from 'next/image';
import ErrorImage from '@/assent/Img/404.svg'
const notFound = () => {
  return (
    <Fragment>
       <div className="bg-white">
        <Navbar />
      </div>
       
       <div className='flex items-center justify-center'>
          <Image
          src={ErrorImage}
          width={812}
          height={812}
          />
       </div>
    </Fragment>
  )
}

export default notFound