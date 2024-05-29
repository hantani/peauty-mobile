import React from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./InfoUse.css";

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
            </div>
          </TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
      <Footer></Footer>
    </>
  );
};

export default InfoUse;
