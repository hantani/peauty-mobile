import React from "react";
import "./Stylist.css";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import Card from "../../Component/Card/Card";
import useLock from "../../useHooks/useLock";

const Stylist = () => {
  useLock();

  return (
    <>
      <Header />
      <div className="stylist">
        <p className="heading">스타일리스트</p>
        <div className="options">
          <div className="select-wrapper">
            <select name="" id="">
              <option value="">추천</option>
            </select>
            <select name="" id="">
              <option value="">여</option>
            </select>
          </div>
          <div className="select-wrapper">
            <select name="" id="">
              <option value="">~5년</option>
            </select>
            <select name="" id="">
              <option value="">50,000원 이하</option>
            </select>
          </div>
        </div>
        <div className="btns-wrapper">
          <select name="" id="">
            <option value="">옵션 입력</option>
          </select>
          <button type="button" className="primary-btn">
            바로 예약가능
          </button>
        </div>
        <div className="cards-wrapper">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Stylist;
