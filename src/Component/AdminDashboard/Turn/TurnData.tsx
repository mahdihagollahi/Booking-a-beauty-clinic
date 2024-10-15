type WeekData = {
    time: string;
    reserved: boolean;
  };
  
  type ServiceData = {
    categories: string[];
    doctors: string[];
    weeks: {
      [key: string]: WeekData[];
    };
  };
  
  type ServicesData = {
    [key: string]: ServiceData;
  };
  

  const TurnData = (): ServicesData => {
    return {
      'تزریقات زیبایی': {
        categories: ['فیلتر لب', 'فیلتر چشم', 'فیلتر چانه', 'فیلتر پیشانی'],
        doctors: ['دکتر سمیه ولی پور', 'دکتر سارا زمانی'],
        weeks: {
          'week1': [
            { time: '9:00', reserved: false },
            { time: '10:00', reserved: true },
            { time: '11:00', reserved: false },
          ],
          'week2': [
            { time: '9:00', reserved: true },
            { time: '10:00', reserved: false },
            { time: '12:00', reserved: true },
          ],
   
        }
      },
      'لیزر موهای زائد': {
        categories: ['لیزر صورت', 'لیزر بدن'],
        doctors: ['دکتر مهران', 'دکتر علیرضا'],
        weeks: {
          'week1': [
            { time: '9:00', reserved: false },
            { time: '11:00', reserved: true },
            { time: '13:00', reserved: false },
          ],
          'week2': [
            { time: '10:00', reserved: true },
            { time: '11:00', reserved: false },
            { time: '14:00', reserved: true },
          ],
       
        }
      },


      'فشیال صورت': {
        categories: ['لیزر صورت', 'لیزر بدن'],
        doctors: ['دکتر مهران', 'دکتر علیرضا'],
        weeks: {
          'week1': [
            { time: '9:00', reserved: false },
            { time: '11:00', reserved: true },
            { time: '13:00', reserved: false },
          ],
          'week2': [
            { time: '10:00', reserved: true },
            { time: '11:00', reserved: false },
            { time: '14:00', reserved: true },
          ],
        
        }
      },

      'انواع کاشت': {
        categories: ['لیزر صورت', 'لیزر بدن'],
        doctors: ['دکتر مهران', 'دکتر علیرضا'],
        weeks: {
          'week1': [
            { time: '9:00', reserved: false },
            { time: '11:00', reserved: true },
            { time: '13:00', reserved: false },
          ],
          'week2': [
            { time: '10:00', reserved: true },
            { time: '11:00', reserved: false },
            { time: '14:00', reserved: true },
          ],
       
        }
      },
    
    };
  };
  
  export default TurnData;
  