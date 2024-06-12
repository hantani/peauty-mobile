import React, { useState } from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import Calendar from "react-calendar";
import "./Calendar.css";
import useLock from "../../useHooks/useLock";

const CalendarPage = () => {
  const [value, onChange] = useState(new Date());

  useLock();

  return (
    <>
      <Header />
      <div className="calendar">
        <p className="common-line-heading">캘린더</p>
        <Calendar onChange={onChange} value={value} />
        <div className="reserv-wrapper">
          <p className="heading">
            Today<span>9</span>
          </p>
          <ul className="card-lists">
            <li className="card disabled">
              <div className="time-wrapper">
                <p>
                  <span>AM</span>
                  <span>09 : 00 부터</span>
                </p>
                <p>
                  <span>AM</span>
                  <span>11 : 00 까지</span>
                </p>
              </div>
              <div className="btn-wrapper">
                <button type="button">예약불가</button>
              </div>
            </li>
            <li className="card">
              <div className="time-wrapper">
                <p>
                  <span>AM</span>
                  <span>09 : 00 부터</span>
                </p>
                <p>
                  <span>AM</span>
                  <span>11 : 00 까지</span>
                </p>
              </div>
              <div className="btn-wrapper">
                <button type="button" className="primary-btn">
                  예약하기
                </button>
              </div>
            </li>
            <li className="card disabled">
              <div className="time-wrapper">
                <p>
                  <span>AM</span>
                  <span>09 : 00 부터</span>
                </p>
                <p>
                  <span>AM</span>
                  <span>11 : 00 까지</span>
                </p>
              </div>
              <div className="btn-wrapper">
                <button type="button">예약불가</button>
              </div>
            </li>
            <li className="card">
              <div className="time-wrapper">
                <p>
                  <span>AM</span>
                  <span>09 : 00 부터</span>
                </p>
                <p>
                  <span>AM</span>
                  <span>11 : 00 까지</span>
                </p>
              </div>
              <div className="btn-wrapper">
                <button type="button" className="primary-btn">
                  예약하기
                </button>
              </div>
            </li>
            <li className="card disabled">
              <div className="time-wrapper">
                <p>
                  <span>AM</span>
                  <span>09 : 00 부터</span>
                </p>
                <p>
                  <span>AM</span>
                  <span>11 : 00 까지</span>
                </p>
              </div>
              <div className="btn-wrapper">
                <button type="button">예약불가</button>
              </div>
            </li>
            <li className="card">
              <div className="time-wrapper">
                <p>
                  <span>AM</span>
                  <span>09 : 00 부터</span>
                </p>
                <p>
                  <span>AM</span>
                  <span>11 : 00 까지</span>
                </p>
              </div>
              <div className="btn-wrapper">
                <button type="button" className="primary-btn">
                  예약하기
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CalendarPage;
