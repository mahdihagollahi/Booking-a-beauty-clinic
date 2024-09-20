import React, { Fragment } from 'react'
import Image from "next/image";
import Star from "@/assent/Img/Service/star.svg";
const ServiceInfo = ({serviceData}) => {
  return (
    <Fragment>
         <div className="flex items-center mt-10">
            <p className="font-medium text-xl text-[#393939]">
              {serviceData.serviceTitle}
            </p>
            <div className="flex gap-1 mr-[50%]">
              <p className="font-regular text-base text-[#393939]">
                {serviceData.serviceRating}
              </p>
              <Image src={Star} width={24} height={24} alt="Star" />
            </div>
          </div>
    </Fragment>
  )
}

export default ServiceInfo