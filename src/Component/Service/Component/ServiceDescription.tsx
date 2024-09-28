import React, { Fragment } from 'react'

const ServiceDescription = ({serviceData}) => {
  return (
    <Fragment>
         <div className="mt-8">
            <p className="w-[63%] h-[140px] font-regular text-base text-[#8F8F8F]">
              خدمات
              <span> {serviceData.serviceDescription} </span>
              یک درمان حرفه‌ای است که آلودگی، چربی و آرایش را از روی صورت شما
              پاک می‌کند. همچنین می‌تواند به لایه‌برداری پوست و بهبود ظاهر کلی
              پوست شما کمک کند.
            </p>
          </div>
    </Fragment>
  )
}

export default ServiceDescription