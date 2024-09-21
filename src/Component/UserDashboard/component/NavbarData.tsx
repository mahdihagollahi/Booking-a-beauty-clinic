import UserImage from '@/assent/Img/UserDashboard/User.svg'
import UserHoverImage from '@/assent/Img/UserDashboard/َUserHover.svg'
import MyTurnImage from '@/assent/Img/UserDashboard/MyTurn.svg'
import MyTurnHoverImage from '@/assent/Img/UserDashboard/MyTurnHover.svg'
import MyCommentImage from '@/assent/Img/UserDashboard/MyComment.svg'
import MyCommentHoverImage from '@/assent/Img/UserDashboard/MyCommentHover.svg'
import LickedImage from '@/assent/Img/UserDashboard/Licked.svg'
import LikedHoverImage from '@/assent/Img/UserDashboard/LikedHover.svg'


  

const NavbarData = () => {
    return{
        Navbar: [
            {
                id:1,
                image:UserImage,
                title:'پروفایل',
                imageHover: UserHoverImage,
                link: ''
    
            },

            {
                id:2,
                image:MyTurnImage,
                title:'نوبت های من',
                imageHover: MyTurnHoverImage,
                link: ''
    
            },

            {
                id:3,
                image:MyCommentImage,
                title:'نظرات من',
                imageHover: MyCommentHoverImage,
                link: ''
    
            },

            {
                id:4,
                image:LickedImage,
                title:'علاقه مندی ها',
                imageHover: LikedHoverImage,
                link: ''
    
            },
        ]
       
    }
}

export default NavbarData