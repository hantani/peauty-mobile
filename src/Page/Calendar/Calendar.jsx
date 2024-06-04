import React, { useState } from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import Calendar from "react-calendar";
import "./Calendar.css";

const CalendarPage = () => {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Header />
      <div className="calendar">
        <p className="heading">캘린더</p>
        <Calendar onChange={onChange} value={value} />
        <div className="reserv-wrapper">
          <p className="heading">
            Today<span>9</span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CalendarPage;
