import React, { Fragment } from 'react'
import Image from "next/image";
import WomenWhyUs from '@/assent/Img/Landing/WhyUsWomen.svg'
function WhyMe() {
  return (
    <Fragment>
       <div className='bg-inherit py-8  '>
           <p className='mr-20  font-medium text-xl text-[#393939] '>
           چرا کلینیک نورانید
           </p>
           <div className='absolute mr-[35%]'>
            <Image 
            src={WomenWhyUs}
            width={400}
            height={480}
            alt=''
            />
            <p className='font-light'>
                234532452345
            </p>
           </div>
       </div>
    </Fragment>
  )
}

export default WhyMe