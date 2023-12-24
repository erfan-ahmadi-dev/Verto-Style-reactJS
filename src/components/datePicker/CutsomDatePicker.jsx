import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
const CustomDatePicker = () => {
  const [value, setValue] = useState(new Date());
  const handleDateChange = (newValue) => {
    setValue(newValue);
    // Convert the timestamp to a Date object
    const selectedDate = new Date(newValue);
    console.log(selectedDate.getFullYear());
  };
  return (
    <DatePicker
      calendar={persian}
      locale={persian_fa}
      highlightToday="true"
      calendarPosition="bottom-right"
      value={value}
      onChange={handleDateChange}
    />
  );
};

export default CustomDatePicker;
