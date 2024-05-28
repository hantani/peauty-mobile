import React from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import Card from "../../Component/Card/Card";
import "./StyleShop.css";
import useLock from "../../useHooks/useLock";

const StyleShop = () => {
  useLock();

  return (
    <>
      <Header />
      <div className="style-shop">
        <p className="heading">스타일 샵</p>
        <div className="options">
          <div className="select-wrapper">
            <select name="" id="">
              <option value="">평점</option>
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
          <button type="button" className="primary-btn">
            바로 예약가능
          </button>
          <button type="button" className="primary-btn">
            픽업가능
          </button>
          <button type="button" className="secondary-btn">
            <span className="map-icon"></span>
            지도보기
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

export default StyleShop;
