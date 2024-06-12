import React from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import "./Photo.css";
import { publicUrl } from "../../Variable/variable";
import useLock from "../../useHooks/useLock";

const Photo = () => {
  useLock();

  return (
    <>
      <Header></Header>
      <div className="photo">
        <p className="common-line-heading">MY PET</p>
        <div className="txt-wrapper">
          <p className="main-txt">추억을 남겨보세요</p>
          <p className="txt">
            사랑하는 반려동물의 추억을 이곳에 남겨보세요.
            <br />
            등록 할 경우 스타펫에도 자동으로 참여하게 됩니다.
            <br />
            정기적인 이벤트를 통해서 사랑하는 반려동물에게 선물해주세요.
            <br />
          </p>
          <button type="button" className="primary-btn">
            업로드 <span className="upload-icon"></span>
          </button>
        </div>
        <ul className="photo-lists">
          <li className="photo-list">
            <button type="button" className="close-btn"></button>
            <img src={publicUrl + "/img/test-img.png"} alt="테스트" />
          </li>
          <li className="photo-list">
            <button type="button" className="close-btn"></button>
            <img src={publicUrl + "/img/test-img.png"} alt="테스트" />
          </li>
          <li className="photo-list">
            <button type="button" className="close-btn"></button>
            <img src={publicUrl + "/img/test-img.png"} alt="테스트" />
          </li>
          <li className="photo-list">
            <button type="button" className="close-btn"></button>
            <img src={publicUrl + "/img/test-img.png"} alt="테스트" />
          </li>
        </ul>
        <div className="btn-wrapper">
          <button type="button" className="primary-btn">
            더보기
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Photo;
