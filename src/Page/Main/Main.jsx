import React from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
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
      <div className="section-three">
        <div className="common-title">
          <p className="sub-txt">스타일 샵</p>
          <p className="main-txt type-02">
            STYLE
            <br />
            SHOP
          </p>
        </div>
        <div className="img-wrapper map">
          <img src={publicUrl + "/img/company-map.png"} alt="company map" />
        </div>
        <div className="img-wrapper profile">
          <img src={publicUrl + "/img/section-three.png"} alt="profile" />
        </div>
        <div className="txt-wrapper">
          <p className="txt">
            가까운 스타일 샵은 어떠세요?
            <br />
            픽업이 가능한지와 거리를 알려드립니다.
          </p>
          <p className="txt">
            어떤 스타일리스트가 하는지 고민하지마세요.
            <br />
            샵이지만 스타일리스트를 선택할 수 있습니다.
          </p>
        </div>
        <Link className="primary-btn">
          스타일 샵 찾기
          <span className="arrow"></span>
        </Link>
        <p className="sub-txt">퓨티는 지역 기반의 스타일리스트를 제공합니다.</p>
      </div>
      <div className="section-four">
        <div className="common-title">
          <p className="sub-txt">스타 펫</p>
          <p className="main-txt">STAR PET</p>
        </div>
        <div className="img-wrapper">
          <img src={publicUrl + "/img/section-four.png"} alt="section four" />
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
        <Link className="secondary-btn">
          스타 펫 더보기
          <span className="arrow"></span>
        </Link>
        <Link className="primary-btn">
          스타 펫 사진 업로드
          <span className="arrow"></span>
        </Link>
        <p className="sub-txt">
          예뻐요 <span className="heart">♥</span> 표현 잊지 마세요.
        </p>
      </div>
      <div className="section-five">
        <div className="common-title">
          <p className="sub-txt">이용안내</p>
          <p className="main-txt type-02">OPERATION GUIDE</p>
        </div>
        <div className="txt-wrapper">
          <p className="main-txt">
            스타일리스트 등록은 검증 절차를 진행해야 됩니다.
          </p>
          <p className="sub-txt">
            사업장 없이도 개인사업자만 있으면 등록이 가능합니다. 직접 서비스
            지역을 설정 할 수 있으며 이외에도 미용 항목, 항목별 금액, 정기권
            쿠폰, 근무 시간 및 휴무 등의 다양한 설정을 제공합니다. 별도의 등록
            및 운영, 관리 비용이 전혀 없습니다. 보다 편리하고 쉽도록 다양한 기능
            (고객관리, 일정관리, 결제관리, 외) 을 제공합니다. 주단위의 빠른 정산
            및 안정적인 프로세스를 제공합니다. PC, Android, iOS등의 서비스가
            가능하도록 제공합니다. 다양한 정보와 꼭 필요한 정보들을 제공합니다.
            무엇보다 정기적인 지원 (교육, 정보공유, 시상을 통한 현금 또는 현물
            제공) 서비스를 제공합니다.
          </p>
        </div>
        <Link className="primary-btn">
          등록가입
          <span className="arrow"></span>
        </Link>
      </div>
      <div className="section-six">
        <div className="img-wrapper">
          <img src={publicUrl + "/img/main-logo.png"} alt="main-logo" />
        </div>
        <div className="txt-wrapper">
          <p className="main-txt">
            수익의 일부를 정기적으로 반려동물과
            <br />
            함께 살아가는 삶에 사회기부
          </p>
          <p className="sub-txt">
            반려동물 미용사, 반려동물과 함께하는 삶을 이끌어갑니다.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;
