import React from "react";
import "./Card.css";
import { publicUrl } from "../../Variable/variable";

const Card = () => {
  return (
    <div className="card">
      <div className="profile-wrapper">
        <div className="img-wrapper">
          <div className="img">
            <img src={publicUrl + "/img/profile.png"} alt="profile" />
          </div>
          <div className="txt-wrapper">
            <p className="name">조한나</p>
            <p className="career">경력7년</p>
            <p className="certificate">펫매니저 이수</p>
          </div>
        </div>
        <div className="info-wrapper">
          <p>1KM이내</p>
          <p>정기권 가능</p>
          <p>매주 수요일 휴무</p>
        </div>
      </div>
      <div className="icons-wrapper">
        <div className="icon left heart">
          <img src={publicUrl + "/img/love.png"} alt="love icon" />
          <p className="heading">만족도</p>
          <p className="evaluation">Great</p>
        </div>
        <div className="icon">
          <img src={publicUrl + "/img/like.png"} alt="love icon" />
          <p className="heading">좋아요</p>
          <p className="evaluation">82</p>
        </div>
        <div className="icon">
          <img src={publicUrl + "/img/person.png"} alt="love icon" />
          <p className="heading">이용고객</p>
          <p className="evaluation">91</p>
        </div>
        <div className="icon">
          <img src={publicUrl + "/img/person-heart.png"} alt="love icon" />
          <p className="heading">고정고객</p>
          <p className="evaluation">57</p>
        </div>
      </div>
      <div className="btns-wrapper">
        <button type="button" className="secondary-btn">
          프로필
        </button>
        <button type="button" className="primary-btn">
          예약하기
        </button>
      </div>
    </div>
  );
};

export default Card;
