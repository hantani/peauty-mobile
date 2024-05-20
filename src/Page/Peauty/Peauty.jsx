import React from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import { publicUrl } from "../../Variable/variable";
import "./Peauty.css";

const Peauty = () => {
  return (
    <>
      <Header></Header>
      <div className="peauty">
        <div className="section-one">
          <div className="img-wrapper">
            <img src={publicUrl + "/img/main-logo.png"} alt="main-logo" />
          </div>
          <div className="txt-wrapper">
            <p className="main-txt">
              반려동물의 "<span>Pet</span>"과 미용의 "<span>Beauty</span>"의
              합성어 "<span>Peauty</span>"입니다.
            </p>
            <p className="small-txt">
              저희 퓨티는 단순한 미용만을 목적으로 하지 않으며
              <br />
              사람과 사람, 반려동물과 사람 "<span>함께 삶을 사는 세상</span>"을
              위해서
              <br />
              좀더 밝은 세상을 만들고자 시작하게 되었습니다.
            </p>
            <p className="second-main-txt">
              수익의 일부를 정기적으로
              <br />
              반려동물과 함께 살아가는 삶에 사회기부
            </p>
            <p className="second-small-txt">
              반려동물 미용사, 반려동물과 함께하는 분들의 밝은 삶이
              <br />될 수 있도록 최선을 다하겠습니다.
            </p>
          </div>
        </div>
        <div className="divide"></div>
        <div className="section-two">
          <p className="heading">PEAUTY Service</p>
          <p className="txt">
            반려동물의 <span>미용 서비스 플랫폼</span>
            <br />
            반려동물의 미용이 필요한 고객(사용자)과 반려동물 미용사와의{" "}
            <span>매칭 플랫폼</span>
            <br />
            고객의 집으로 직접 찾아와 제공되어지는{" "}
            <span>반려동물 방문 미용 서비스 플랫폼</span>
          </p>
          <p className="last-txt">
            저희와 <span>"함께"</span> 하시죠.
          </p>
        </div>
        <div className="btns-wrapper"></div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Peauty;
