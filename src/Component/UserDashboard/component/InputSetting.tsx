import React from "react";
import Image from "next/image";
import edit from "@/assent/Img/UserDashboard/vuesax/edit-2.png"
const InputSetting =()=>{
const setting=[
    {text:"شماره تماس:"},
    {text:"ساعت کاری:"},
    {text:"اینستاگرام"},
    {text:"آدرس:"},
    {text:"دسته بندی اصلی:"},
    {text:"دسته بندی اصلی:"}
]
    return(
        <>
        <div className="w-[1080px]">
            <div className="flex flex-col gap-3">
                <div className="flex flex-row justify-between">
                <span>توضیح کوتاه درباره ما:</span>
                <Image src={edit} alt=""/>
                </div>
                <input className="w-full bg-white h-32 p-3 border-2 border-[#00AEFF] rounded-lg"/>
            </div>
            <div className="flex flex-wrap gap-10	">
                {setting.map((test)=>(
                    <div className="w-96 flex flex-col">
                        <div className="flex flex-row justify-between">
                        <span>{test.text}</span>
                        <Image src={edit} alt=""/>
                        </div>
                        <input className="border-2 border-solid rounded-md p-3 w-96 border-[#00AEFF]"/>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}
export default InputSetting;