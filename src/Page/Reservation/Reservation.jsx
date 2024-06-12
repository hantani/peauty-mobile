import React from "react";
import "./Reservation.css";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import useLock from "../../useHooks/useLock";

const Reservation = () => {
  useLock();
  return (
    <>
      <Header></Header>
      <div className="reservation">
        <p className="common-line-heading">스타일리스트</p>
        <ul className="stylist-lists">
          <li className="list">
            <div className="img-wrapper">
              <img src="" alt="test" />
            </div>
          </li>
        </ul>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Reservation;
