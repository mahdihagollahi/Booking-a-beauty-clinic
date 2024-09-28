import React, { Fragment } from 'react'

const Metod = ({serviceData}) => {
  return (
    <Fragment>
         {serviceData.methods.map((method, index) => (
          <div key={index} className="mt-10">
            <h4 className="font-medium text-lg text-[#393939]">
              {method.title}
            </h4>
            <p className="font-regular text-base mt-3 text-[#727272]">
              {method.description}
            </p>
          </div>
        ))}
    </Fragment>
  )
}

export default Metod