import dashbord from "@/assent/Img/AdminDashboard/Dashboard.svg";
import user from "@/assent/Img/AdminDashboard/user.svg";
import Services from "@/assent/Img/AdminDashboard/Service.svg";
import docter from "@/assent/Img/AdminDashboard/Doctor.svg";
import work from "@/assent/Img/AdminDashboard/Work.svg";
import Turn from "@/assent/Img/AdminDashboard/Turn.svg";
import Report from "@/assent/Img/AdminDashboard/Report.svg";
import Comment from "@/assent/Img/AdminDashboard/Comment.svg";
import question from "@/assent/Img/AdminDashboard/question.svg";
import Article from "@/assent/Img/AdminDashboard/Article.svg";
import setting from "@/assent/Img/AdminDashboard/setting-2.svg";

import dashbordHover from "@/assent/Img/AdminDashboard/DashboardHoverd.svg";
import userHover from "@/assent/Img/AdminDashboard/userHover.svg";
import ServicesHover from "@/assent/Img/AdminDashboard/ServiceHover.svg";
import docterHover from "@/assent/Img/AdminDashboard/DoctorHover.svg";
import workHover from "@/assent/Img/AdminDashboard/WorkHover.svg";
import TurnHover from "@/assent/Img/AdminDashboard/TurnHover.svg";
import ReportHover from "@/assent/Img/AdminDashboard/ReportHover.svg";
import CommentHover from "@/assent/Img/AdminDashboard/CommentHover.svg";
import questionHover from "@/assent/Img/AdminDashboard/questionHover.svg";
import ArticleHover from "@/assent/Img/AdminDashboard/ArticleHover.svg";

function NavbarData() {
  return {
    Navbar: [
      {
        id: 1,
        src: dashbord,
        hoverSrc: dashbordHover,
        text: 'داشبورد',
        link: "/AdminDashboard/Dashboard",
      },
      {
        id: 2,
        src: user,
        hoverSrc: userHover,
        text: 'کاربران',
        link: "",
      },
      {
        id: 3,
        src: Services,
        hoverSrc: ServicesHover,
        text: 'خدمات',
        link: "",
      },
      {
        id: 4,
        src: docter,
        hoverSrc: docterHover,
        text: 'پزشکان',
        link: "",

      },
      {
        id: 5,
        src: work,
        hoverSrc: workHover,
        text: 'نمونه کار ها',
        link: "",
      },
      {
        id: 6,
        src: Turn,
        hoverSrc: TurnHover,
        text: 'نوبت ها',
        link: "",
      },
      {
        id: 7,
        src: Report,
        hoverSrc: ReportHover,
        text: 'گزارشات',
        link: "",
      },
      {
        id: 8,
        src: Comment,
        hoverSrc: CommentHover,
        text: 'نظرات',
        link: "",
      },
      {
        id: 9,
        src: question,
        hoverSrc: questionHover,
        text: 'سوالات متداول',
        link: "",
      },
      {
        id: 10,
        src: Article,
        hoverSrc: ArticleHover,
        text: 'مقالات',
        link: "",
      },

      {
        id: 11,
        src: setting,
        // hoverSrc: ArticleHover,
        text: 'تنظیمات',
        link: "",
      },
    ],
  };
}

export default NavbarData;
