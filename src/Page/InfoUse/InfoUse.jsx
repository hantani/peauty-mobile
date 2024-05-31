import React from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./InfoUse.css";
import { Link } from "react-router-dom";

const InfoUse = () => {
  return (
    <>
      <Header></Header>
      <div className="info-use">
        <Tabs>
          <TabList>
            <Tab>반려인</Tab>
            <Tab>스타일리스트</Tab>
          </TabList>

          <TabPanel>
            <div className="info-box">
              <ul className="orders">
                <li>스타일리스트 선택 &rarr;</li>
                <li>예약 및 방문 &rarr;</li>
                <li>미용/목욕/청소 &rarr;</li>
                <li>미용 평가 및 완료</li>
              </ul>
              <p className="txt">
                스타일리스트의 자격증, 경력, 포트폴리오 외
                <span>검증을 거쳐 신뢰를 제공</span>합니다.
                <span>보다 쉽고, 빠르고, 안전하게</span> 사랑스런 반려동물의
                미용을 스타일리스트에게 맡겨보세요. 환경이 바뀌지 않고 생활하는
                환경에서 미용함으로써 <span>반려동물의 스트레스를 최소화</span>
                시킬 수 있습니다. 다이어리를 통한 관리와 함께
                <span>다양한 서비스를 제공</span>해드립니다.
              </p>
              <Link to="" className="primary-btn sign-up-btn">
                회원가입
              </Link>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="info-box">
              <ul className="orders">
                <li>자격증 등록 &rarr;</li>
                <li>경력 외 정보 입력 &rarr;</li>
                <li>검증 및 승인 &rarr;</li>
                <li>서비스 개시</li>
              </ul>
              <p className="txt">
                사업장 없이도 <span>개인사업자만 있으면 등록</span>이
                가능합니다. 직접 서비스 지역을 설정 할 수 있으며 이외에도 미용
                항목, 항목별 금액, 정기권 쿠폰, 근무 시간 및 휴무 등의
                <span>다양한 설정</span>을 제공합니다. 별도의
                <span>등록 및 운영, 관리 비용이 전혀 없습니다.</span> 보다
                편리하고 쉽도록 <span>다양한 기능</span> (고객관리, 일정관리,
                결제관리, 외) 을 제공합니다.<span>주단위의 빠른 정산</span>및
                안정적인 프로세스를 제공합니다.
                <span>PC, Android, iOS등의 서비스</span>가 가능하도록
                제공합니다. 다양한 정보와 <span>꼭 필요한 정보들을 제공</span>
                합니다. 무엇보다 <span>정기적인 지원</span>(교육, 정보공유,
                시상을 통한 현금 또는 현물 제공) 서비스를 제공합니다.
              </p>
              <Link to="" className="primary-btn sign-up-btn">
                등록하기
              </Link>
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <Footer></Footer>
    </>
  );
};

export default InfoUse;
