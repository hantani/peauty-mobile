import React from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import "./SignUp.css";
import { Link } from "react-router-dom";
import useLock from "../../useHooks/useLock";

const SingUp = () => {
  useLock();

  return (
    <>
      <Header />
      <div className="sign-up">
        <p className="heading">회원가입</p>
        <p className="txt">
          반려동물과 함께하는 반려인의 경우 사용자 회원가입을 스타일리스트
          등록의 경우
          <br />
          <span>검증 절차를 거쳐 안내해 드립니다.</span>
        </p>
        <div className="btns-wrapper">
          <Link className="secondary-btn stylist-sign-up-btn">
            <span className="icon"></span>
            스타일리스트 등록
          </Link>
          <Link className="primary-btn companion-sign-up-btn">
            <span className="icon"></span>
            반려인 회원가입
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingUp;
