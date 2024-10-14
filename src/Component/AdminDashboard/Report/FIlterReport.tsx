"use client";
import React, { Fragment, useState } from "react";
import moment from "moment-jalaali";
const FIlterReport = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [month, setMonth] = useState(moment().jMonth());
  const [year, setYear] = useState(moment().jYear());
  const [selectedTime, setSelectedTime] = useState(null);

  

  const preSelectedTimes = ["13:00", "17:00", "20:00"];

  const handleSelectTime = (time) => {
    if (!preSelectedTimes.includes(time)) {
      setSelectedTime(time);
    }
  };

  const daysInMonth = moment.jDaysInMonth(year, month);
  const firstDay = moment(`${year}/${month + 1}/01`, "jYYYY/jM/jD").weekday();

  const handleDayClick = (day) => {
    setSelectedDate(day);
  };

  const goToNextMonth = () => {
    setMonth((prev) => (prev + 1) % 12);
    if (month === 11) setYear(year + 1);
  };

  const goToPrevMonth = () => {
    setMonth((prev) => (prev - 1 + 12) % 12);
    if (month === 0) setYear(year - 1);
  };

  return (
    <Fragment>
        <div className="flex items-center gap-5">

     
      <div className="bg-[#DC1E7A] p-2 rounded-lg   text-center">
        <h2 className="text-sm text-white  font-medium">
          {selectedDate
            ? moment(
                `${year}/${month + 1}/${selectedDate}`,
                "jYYYY/jM/jD"
              ).format("jYYYY/jMM/jDD")
            : moment().format("jYYYY/jMM/jDD")}
        </h2>
      </div>
      <div>
        <p className="font-medium text-lg text-[#393939] ">
        الی
        </p>
      </div>
      <div className="bg-[#DC1E7A] p-2 rounded-lg   text-center">
      <h2 className="text-sm text-white  font-medium">
          {selectedDate
            ? moment(
                `${year}/${month + 1}/${selectedDate}`,
                "jYYYY/jM/jD"
              ).format("jYYYY/jMM/jDD")
            : moment().format("jYYYY/jMM/jDD")}
        </h2>
      </div>
      </div>
    </Fragment>
  );
};

export default FIlterReport;
