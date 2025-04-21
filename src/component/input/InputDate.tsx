import React, { useState, useEffect } from "react";
import styles from "../../Calendar.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { CalendarDateRangeIcon } from "@heroicons/react/24/solid";

const defaultStyle = {
  NOMAL:
    "border border-[#D9D9D9] outline-none bg-[#FFF] block w-full rounded-lg py-2 px-2",
  ERROR:
    "[border:none] outline-none block w-full rounded-lg py-2 px-2 bg-red-500 bg-opacity-10 placeholder-[#D25656]",
  DISABLED:
    "[border:none] outline-none bg-[#D9D9D9]  block w-full rounded-lg py-2 px-2",
};

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

type typeDate = {
  inDate: string;
  placeholder?: string;
  setDateCallback: (date: string) => void;
  errorDesc?: string;
  disabled?: boolean;
}

function InputDate({ inDate, placeholder, setDateCallback, errorDesc, disabled }: typeDate) {
  const [ready, setReady] = useState(false);
  const [displayDate, setDisplayDate] = useState("");

  //calendar
  const [showCalendar, setshowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());
  const [hasError, setHasError] = useState(false);

  const formatDateInBuddhistEra = ({
    date,
    formatStr,
  }: {
    date: moment.Moment;
    formatStr: string;
  }) => {
    const beYear = date.year() + 543;
    return date.format(formatStr).replace(date.format("YYYY"), beYear.toString());
  };

  useEffect(() => {
    try {
      if (inDate && inDate.indexOf("_") === -1 && !ready) {
        setReady(true);
        const mDate = moment(inDate, "YYYY-MM-DD");
        setDisplayDate(formatDateInBuddhistEra({ date: mDate, formatStr: "DD/MM/YYYY" }));
      } else if (!inDate) {
        setDateCallback("");
        setDisplayDate("");
      }
    } catch (error) {
      // console.error(error);
    }
  }, [inDate, ready]); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleDateCalendar = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setshowCalendar((prevState) => !prevState);
  };


  const handleDateChange = (date: Value) => {
    if (date instanceof Date) {
      const inputDate = moment(date);

      setDisplayDate(
        formatDateInBuddhistEra({
          date: inputDate,
          formatStr: "DD/MM/YYYY",
        })
      );
      setDateCallback(inputDate.format("YYYY-MM-DD"));

      setSelectedDate(date);
      setshowCalendar(false);
      setReady(false);
    } else {
      // console.warn("Invalid or unsupported date value selected:", date);
    }
  };

  const isLeapYear = (year: any) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  return (
    <>

      <div className="relative">
        <input
          dir="ltr"
          // mask="99/99/9999"
          placeholder={placeholder}
          disabled={disabled}
          className={
            disabled
              ? defaultStyle.DISABLED
              : errorDesc
                ? defaultStyle.ERROR
                : defaultStyle.NOMAL
          }
          value={displayDate || ""}
          onChange={(e) => {
            setDisplayDate(e.target.value);

            if (e.target.value && e.target.value.indexOf("_") === -1) {
              const [day, month, year] = e.target.value.split("/");
              const christianYear = parseInt(year, 10) - 543;
              const inputYear = parseInt(year, 10);
              const inputDate = moment(
                `${day}/${month}/${christianYear}`,
                "DD/MM/YYYY",
                true
              );

              if (inputDate.isValid()) {
                //เช็คว่ากรอกเป็น ค.ศ
                if (inputYear < 2500) {
                  setHasError(true);
                } else {
                  setHasError(false);
                }

                //เช็คปีอธิกสุรทิน
                if (inputDate.month() === 1 && inputDate.date() === 29) {
                  if (!isLeapYear(christianYear)) {
                    setDisplayDate("");
                  }
                }
                setDateCallback(inputDate.format("YYYY-MM-DD"));
              } else {
                setDateCallback("");
              }
            } else {
              setDateCallback(e.target.value);
            }
          }}
        />

        {!disabled && selectedDate && (
          <div
            className={`absolute top-1 right-2 ${errorDesc || hasError
              ? "color-selectedate"
              : "color-selectedate"
              }`}
            onClick={toggleDateCalendar}
            dir="rtl"
          >
            <CalendarDateRangeIcon className="w-[1.5rem] h-[2rem] text-[#0000FF] cursor-pointer" />
          </div>
        )}
      </div>
      {!disabled && showCalendar && (
        <div className="relative">
          <Calendar
            className={styles.myCalendar}
            value={selectedDate ?? new Date()}
            onChange={handleDateChange}
            locale="th"
          />
        </div>
      )}

      {hasError && (
        <p className="text-red-500">กรุณากรอกวันที่ในรูปแบบ พ.ศ.</p>
      )}
      {errorDesc && (
        <p className="text-red-500">{errorDesc}</p>
      )}
    </>
  );
}

export default InputDate;
