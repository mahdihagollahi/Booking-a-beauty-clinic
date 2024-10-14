"use client";
import React, { Fragment, useState } from "react";
import moment from "moment-jalaali";

const FIlterReport = () => {
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [month1, setMonth1] = useState(moment().jMonth());
  const [month2, setMonth2] = useState(moment().jMonth());
  const [year1, setYear1] = useState(moment().jYear());
  const [year2, setYear2] = useState(moment().jYear());
  const [showCalendar1, setShowCalendar1] = useState(false);
  const [showCalendar2, setShowCalendar2] = useState(false);

  const handleDayClick1 = (day) => {
    setSelectedDate1(day);
    setShowCalendar1(false);
  };

  const handleDayClick2 = (day) => {
    setSelectedDate2(day);
    setShowCalendar2(false);
  };

  const goToNextMonth1 = () => {
    setMonth1((prev) => (prev + 1) % 12);
    if (month1 === 11) setYear1(year1 + 1);
  };

  const goToPrevMonth1 = () => {
    setMonth1((prev) => (prev - 1 + 12) % 12);
    if (month1 === 0) setYear1(year1 - 1);
  };

  const goToNextMonth2 = () => {
    setMonth2((prev) => (prev + 1) % 12);
    if (month2 === 11) setYear2(year2 + 1);
  };

  const goToPrevMonth2 = () => {
    setMonth2((prev) => (prev - 1 + 12) % 12);
    if (month2 === 0) setYear2(year2 - 1);
  };

  return (
    <Fragment>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-5">
          <div
            className="bg-[#DC1E7A] p-2 rounded-lg text-center cursor-pointer"
            onClick={() => setShowCalendar1(!showCalendar1)}
          >
            <h2 className="text-sm text-white font-medium">
              {selectedDate1
                ? moment(
                    `${year1}/${month1 + 1}/${selectedDate1}`,
                    "jYYYY/jM/jD"
                  ).format("jYYYY/jMM/jDD")
                : moment().format("jYYYY/jMM/jDD")}
            </h2>
          </div>
        </div>

        {showCalendar1 && (
          <div className="bg-white py-10 px-6 w-[40%] rounded-2xl shadow-md mx-auto mt-56 z-50 absolute top-0 left-0 right-0">
            <div className="flex justify-between items-center">
              <button
                className="text-[#A5A5A5] px-14 whitespace-nowrap"
                onClick={goToPrevMonth1}
              >
                &lt;{" "}
                {moment()
                  .jYear(year1)
                  .jMonth(month1 - 1)
                  .format("jMMMM")}
              </button>
              <h2 className="text-xl font-bold whitespace-nowrap">
                {moment().jYear(year1).jMonth(month1).format("jMMMM jYYYY")}
              </h2>
              <button
                className="text-[#A5A5A5] px-14 whitespace-nowrap"
                onClick={goToNextMonth1}
              >
                {moment()
                  .jYear(year1)
                  .jMonth(month1 + 1)
                  .format("jMMMM")}{" "}
                &gt;
              </button>
            </div>

            <div className="grid grid-cols-7 gap-4 mt-4 text-center">
              {["ش", "ی", "د", "س", "چ", "پ", "ج"].map((day, index) => (
                <div key={index} className="font-bold text-[#B01862]">
                  {day}
                </div>
              ))}

              {Array.from(
                {
                  length: moment(`${year1}/${month1 + 1}`, "jYYYY/jM")
                    .startOf("jMonth")
                    .weekday(),
                },
                (_, i) => (
                  <div key={i} className="text-transparent">
                    0
                  </div>
                )
              )}

              {Array.from(
                { length: moment.jDaysInMonth(year1, month1) },
                (_, i) => {
                  const day = i + 1;
                  const isSelected = day === selectedDate1;

                  return (
                    <div
                      key={i}
                      onClick={() => handleDayClick1(day)}
                      className={`cursor-pointer p-2 rounded-full ${
                        isSelected
                          ? "bg-[#B01862] text-white"
                          : "bg-transparent"
                      }`}
                    >
                      {day}
                    </div>
                  );
                }
              )}
            </div>
          </div>
        )}

        <div>
          <p className="font-medium text-lg text-[#393939] ">الی</p>
        </div>

        <div className="flex items-center gap-5">
          <div
            className="bg-[#DC1E7A] p-2 rounded-lg text-center cursor-pointer"
            onClick={() => setShowCalendar2(!showCalendar2)}
          >
            <h2 className="text-sm text-white font-medium">
              {selectedDate2
                ? moment(
                    `${year2}/${month2 + 1}/${selectedDate2}`,
                    "jYYYY/jM/jD"
                  ).format("jYYYY/jMM/jDD")
                : moment().format("jYYYY/jMM/jDD")}
            </h2>
          </div>
        </div>

        {showCalendar2 && (
          <div className="bg-white py-10 px-6 w-[40%] rounded-2xl shadow-md mx-auto mt-56 z-50 absolute top-0 left-0 right-0">
            <div className="flex justify-between items-center">
              <button
                className="text-[#A5A5A5] px-14 whitespace-nowrap"
                onClick={goToPrevMonth2}
              >
                &lt;{" "}
                {moment()
                  .jYear(year2)
                  .jMonth(month2 - 1)
                  .format("jMMMM")}
              </button>
              <h2 className="text-xl font-bold whitespace-nowrap">
                {moment().jYear(year2).jMonth(month2).format("jMMMM jYYYY")}
              </h2>
              <button
                className="text-[#A5A5A5] px-14 whitespace-nowrap"
                onClick={goToNextMonth2}
              >
                {moment()
                  .jYear(year2)
                  .jMonth(month2 + 1)
                  .format("jMMMM")}{" "}
                &gt;
              </button>
            </div>

            <div className="grid grid-cols-7 gap-4 mt-4 text-center">
              {["ش", "ی", "د", "س", "چ", "پ", "ج"].map((day, index) => (
                <div key={index} className="font-bold text-[#B01862]">
                  {day}
                </div>
              ))}

              {Array.from(
                {
                  length: moment(`${year2}/${month2 + 1}`, "jYYYY/jM")
                    .startOf("jMonth")
                    .weekday(),
                },
                (_, i) => (
                  <div key={i} className="text-transparent">
                    0
                  </div>
                )
              )}

              {Array.from(
                { length: moment.jDaysInMonth(year2, month2) },
                (_, i) => {
                  const day = i + 1;
                  const isSelected = day === selectedDate2;

                  return (
                    <div
                      key={i}
                      onClick={() => handleDayClick2(day)}
                      className={`cursor-pointer p-2 rounded-full ${
                        isSelected
                          ? "bg-[#B01862] text-white"
                          : "bg-transparent"
                      }`}
                    >
                      {day}
                    </div>
                  );
                }
              )}
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default FIlterReport;
