import React from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import "./StarPet.css";
import useLock from "../../useHooks/useLock";

const StarPet = () => {
  useLock();

  return (
    <>
      <Header></Header>
      <div className="star-pet">
        <div className="top-section">
          <p className="sub-title">사랑스런 반려동물의 사진을 올려보세요.</p>
          <p className="title">
            <span>매월 이벤트</span>를 통해 꼭 필요한
            <br /> 상품들이 기다립니다.
          </p>
          <p className="txt">
            <span class="strong-txt">
              예뻐요 <span>♥</span> 표현
            </span>
            클릭 한번으로 칭찬해주세요.
          </p>
          <button type="button" className="primary-btn">
            스타 펫 참여하기
            <span className="arrow"></span>
          </button>
        </div>
        <div className="weekly-star-pet">
          <p className="heading">금주의 스타 펫</p>
          <div className="img-slide">
            <div className="img-wrapper"></div>
            <div className="img-wrapper"></div>
            <div className="img-wrapper"></div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default StarPet;
