import React from 'react';

const AppointmentDetails = ({ data, selectedWeek }) => {
 
  return (
    <div>
    
      <div className="flex items-center justify-between">
        {data?.categories?.map((category) => (
          <p key={category} className="mb-1">{category}</p>
        ))}
      </div>

      <h2 className="text-lg font-semibold mt-4 mb-2">پزشکان:</h2>
      <ul className="list-disc pl-5">
        {data?.doctors?.map((doctor) => (
          <li key={doctor} className="mb-1">{doctor}</li>
        ))}
      </ul>

      <h2 className="text-lg font-semibold mt-4 mb-2">نوبت‌ها (هفته: {selectedWeek}):</h2>
      <div className="grid grid-cols-3 gap-4">
        {data?.weeks[selectedWeek]?.map((appointment, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg text-center font-semibold ${
              appointment.reserved ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
            }`}
          >
            {appointment.time} - {appointment.reserved ? 'نوبت پر شده' : 'نوبت خالی'}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentDetails;
