
import DoctorSara from '@/assent/Img/Landing/DoctorLozi5.svg'
import DoctorImage from "@/assent/Img/Landing/DoctorImage4.svg";
import DoctorDelara from "@/assent/Img/Landing/DoctorLozi1.svg";
import DoctorSepehr from "@/assent/Img/Landing/DoctorLozi2.svg";

const DoctorData = () => {
 return{
    doctors: [
        {
            id : 1 , 
            name: 'دکتر سپهر سولی',
            specialty: 'متخصص جراحی پلاستیک',
            availability: 'روز های سه شنبه تا سه شنبه از ساعت 12:30 تا 18',
            education: [
              'دارای مدرک پزشکی از دانشکده پزشکی دانشگاه تهران',
              'اخذ دانشنامه تخصصی پوست سال 1385 از دانشگاه تهران بیمارستان پوست رازی',
              'دارای مدرک فلوشیپ مراقبت از زخم از دانشگاه تورنتو کانادا در سال 2007 میلادی'
            ],
              image: DoctorImage
        },

        {
            id : 2 , 
            name: 'دکتر فتانه سولی',
            specialty: 'متخصص جراحی پلاستیک',
            availability: 'روز های سه شنبه تا سه شنبه از ساعت 12:30 تا 18',
            education: [
              'دارای مدرک پزشکی از دانشکده پزشکی دانشگاه تهران',
              'اخذ دانشنامه تخصصی پوست سال 1385 از دانشگاه تهران بیمارستان پوست رازی',
              'دارای مدرک فلوشیپ مراقبت از زخم از دانشگاه تورنتو کانادا در سال 2007 میلادی'
            ],
              image: DoctorSara
        },

        {
            id : 3 , 
            name: 'دکتر سپهر سولی',
            specialty: 'متخصص جراحی پلاستیک',
            availability: 'روز های سه شنبه تا سه شنبه از ساعت 12:30 تا 18',
            education: [
              'دارای مدرک پزشکی از دانشکده پزشکی دانشگاه تهران',
              'اخذ دانشنامه تخصصی پوست سال 1385 از دانشگاه تهران بیمارستان پوست رازی',
              'دارای مدرک فلوشیپ مراقبت از زخم از دانشگاه تورنتو کانادا در سال 2007 میلادی'
            ],
              image:DoctorDelara
        },

        {
            id : 4 , 
            name: 'دکتر ترانه سولی',
            specialty: 'متخصص جراحی پلاستیک',
            availability: 'روز های سه شنبه تا سه شنبه از ساعت 12:30 تا 18',
            education: [
              'دارای مدرک پزشکی از دانشکده پزشکی دانشگاه تهران',
              'اخذ دانشنامه تخصصی پوست سال 1385 از دانشگاه تهران بیمارستان پوست رازی',
              'دارای مدرک فلوشیپ مراقبت از زخم از دانشگاه تورنتو کانادا در سال 2007 میلادی'
            ],
              image: DoctorSepehr
        },
    ]
 }
}

export default DoctorData