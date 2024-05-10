import React from "react";
import Header from "../../Component/Header/Header";
import "./Main.css";
import { publicUrl } from "../../Variable/variable";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Header></Header>
      <div className="section-one">
        <div className="txt-wrapper">
          <p className="main-txt">
            반려동물을 위한 미용
            <br />
            최고의 스타일리스트가
            <br />
            <span className="bold-txt">
              <span className="bolder-txt">지금</span> 찾아갑니다.
            </span>
          </p>
          <div className="sub-txt-wrapper">
            <p className="sub-txt">
              반려동물의 미용은 피부를 위한 선택이 아닌 필수입니다.
              <br />
              강아지의 경우 여름철 습진이나 염증 등의 피부병발생 위험으로
              <br />
              정기적인 미용 관리가 필요합니다.
            </p>
            <p className="sub-txt">
              신뢰할 수 있는 스타일리스트를 직접 선택하면
              <br />
              고객님이 계시는 곳까지 찾아가 미용, 목욕, 청소까지
              <br />
              깔끔하게 해드립니다.
            </p>
          </div>
        </div>
        <div className="img-wrapper">
          <img src={publicUrl + "/img/section-one.png"} alt="dog-person" />
        </div>
      </div>
      <div className="section-two">
        <div className="common-title">
          <p className="sub-txt">스타일리스트</p>
          <p className="main-txt">STYLIST</p>
        </div>
        <div className="img-wrapper">
          <img src={publicUrl + "/img/section-two.png"} alt="section-two" />
        </div>
        <div className="txt-wrapper">
          <p className="txt">예약 할 수 있는 스타일리스트를 바로 찾아보세요</p>
          <p className="txt">
            고객 100% 평가를 반영한 만족도, 좋아요, 이용고객, 고정고객
            <br />
            프로필과 스타일리스트의 포트폴리오 체크는 필수 입니다.
          </p>
          <p className="txt">지금 바로 찾아보세요</p>
        </div>
        <Link className="primary-btn">
          스타일리스트 찾기
          <span className="arrow"></span>
        </Link>
        <p className="sub-txt">퓨티는 지역 기반의 스타일리스트를 제공합니다.</p>
      </div>
    </>
  );
};

export default Main;
