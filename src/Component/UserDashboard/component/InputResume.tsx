import React from "react";

const InputResume =()=>{
    const Sample =[
        {text:"عنوان خدمات"},
        {text:" اسم پزشکان "}
    ]
    return(
        <>
        <div className="flex flex-row justify-between">
            {Sample.map((test)=>(
             <div className="flex flex-col gap-2">
             <div>{test.text}:</div>
             <input className="border-2 border-solid rounded-md p-3 w-96 border-[#00AEFF]"/>
             </div>
            ))
            }
        </div>
        </>
    )
}
export default InputResume;