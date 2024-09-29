import React from "react";
import Image from "next/image";
import dashbord from "@/assent/Img/ImageIconPanelAdmin/category.svg";
import user from "@/assent/Img/ImageIconPanelAdmin/user.svg";
import Services from "@/assent/Img/ImageIconPanelAdmin/note-2.svg";
import docter from "@/assent/Img/ImageIconPanelAdmin/personalcard.svg";
import work from "@/assent/Img/ImageIconPanelAdmin/gallery.svg";
import Turn from "@/assent/Img/ImageIconPanelAdmin/calendar.svg";
import Report from "@/assent/Img/ImageIconPanelAdmin/card-edit.svg";
import nazar from "@/assent/Img/ImageIconPanelAdmin/messages-2.svg";
import question from "@/assent/Img/ImageIconPanelAdmin/message-question.svg";
import clip from "@/assent/Img/ImageIconPanelAdmin/clipboard-text.svg";
import setting from "@/assent/Img/ImageIconPanelAdmin/setting-2.svg";

const ButtonNavbar = () => {
  return (
    <>
      <div className=" flex flex-col gap-8">
        <div className="flex w-48 h-9 px-4 py-1 flex-row gap-2">
          <Image width={24} height={24} src={dashbord} alt="" />
          <span className="text-[#565656] font-medium">داشبورد</span>
        </div>
        <div className="flex w-48 h-9 px-4 py-1 flex-row gap-2">
          <Image width={24} height={24} src={user} alt="" />
          <span className="text-[#565656] font-medium">کاربران</span>
        </div>
        <div className="flex w-48 h-9 px-4 py-1 flex-row gap-2">
          <Image width={24} height={24} src={Services} alt="" />
          <span className="text-[#565656] font-medium">خدمات</span>
        </div>
        <div className="flex w-48 h-9 px-4 py-1 flex-row gap-2">
          <Image width={24} height={24} src={docter} alt="" />
          <span className="text-[#565656] font-medium">پزشکیان</span>
        </div>
        <div className="flex w-48 h-9 px-4 py-1 flex-row gap-2">
          <Image width={24} height={24} src={work} alt="" />
          <span className="text-[#565656] font-medium">نمونه کار </span>
        </div>
        <div className="flex w-48 h-9 px-4 py-1 flex-row gap-2">
          <Image width={24} height={24} src={Turn} alt="" />
          <span className="text-[#565656] font-medium">نوبت ها</span>
        </div>
        <div className="flex w-48 h-9 px-4 py-1 flex-row gap-2">
          <Image width={24} height={24} src={Report} alt="" />
          <span className="text-[#565656] font-medium">گزارشات</span>
        </div>
        <div className="flex w-48 h-9 px-4 py-1 flex-row gap-2">
          <Image width={24} height={24} src={nazar} alt="" />
          <span className="text-[#565656] font-medium">نظرات</span>
        </div>
        <div className="flex w-48 h-9 px-4 py-1 flex-row gap-2">
          <Image width={24} height={24} src={question} alt="" />
          <span className="text-[#565656] font-medium">سوالات متداول</span>
        </div>
        <div className="flex w-48 h-9 px-4 py-1 flex-row gap-2">
          <Image width={24} height={24} src={clip} alt="" />
          <span className="text-[#565656] font-medium">مقالات</span>
        </div>
        <div className="flex w-48 h-9 px-4 py-1 flex-row gap-2">
          <Image width={24} height={24} src={setting} alt="" />
          <span className="text-[#565656] font-medium">تنظیمات</span>
        </div>
      </div>
    </>
  );
};
export default ButtonNavbar;
