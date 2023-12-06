import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
export const formatDate = (date) => {
  const fadate = new DateObject({
    date: `${date}`,
    format: "YYYY/MM/DD",
    calendar: persian,
    locale: persian_fa,
  });

  return fadate.format();
};
