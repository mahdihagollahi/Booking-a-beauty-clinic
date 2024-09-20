import React from 'react'

const WhyUs = ({serviceData}) => {
  return (
    <div>
         <h4 className="font-medium text-lg text-[#565656]">
          چرا {serviceData.serviceDescription} در کلینیک نورانید؟
        </h4>
        <div className="grid grid-cols-2 gap-10 mt-8">
          {serviceData.reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-[#FFF2F8] w-[402px] h-[65px] flex justify-center items-center"
            >
              {reason}
            </div>
          ))}
        </div>
    </div>
  )
}

export default WhyUs