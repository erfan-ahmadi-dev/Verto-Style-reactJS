import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
const CustomDatePicker = ({ dateValue, setDate }) => {
  const handleDateChange = (newValue) => {
    setDate(newValue);
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
      value={dateValue}
      onChange={handleDateChange}
      inputClass="editInput"
      placeholder="برای انتخاب تاریخ کلیک کنید"
    />
  );
};

export default CustomDatePicker;
