import React, { useEffect, useRef } from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import "./PetName.css";

const PetName = () => {
  const selectRef = useRef();

  useEffect(() => {
    selectRef.current.addEventListener("click", (e) => {
      if (e.target.classList.contains("select-btn")) {
        const $btn = e.target;
        const $wrapper = e.target.parentElement;
        for (let i = 0; i < $wrapper.children.length; i++) {
          $wrapper.children[i].classList.remove("on");
        }
        $btn.classList.add("on");
      }
    });
  }, []);

  return (
    <>
      <Header></Header>
      <div className="pet-name">
        <p className="heading">Pet Name</p>
        <div className="common-form">
          <div className="set">
            <div className="th">이름</div>
            <div className="td">
              <input type="text" placeholder="이름을 입력해주세요" />
            </div>
          </div>
          <div className="set">
            <div className="th">태어난 날</div>
            <div className="td">
              <input type="text" placeholder="YYYYMMDD 숫자만 입력" />
            </div>
          </div>
          <div className="set has-textarea">
            <div className="th">특이사항</div>
            <div className="td">
              <textarea
                name=""
                id=""
                placeholder="특이사항을 입력해주세요. ex.비만, 슬개골탈구"
              ></textarea>
            </div>
          </div>
          <div className="set">
            <div className="th">나이</div>
            <div className="td">
              <input type="text" placeholder="나이를 입력해 주세요." />
            </div>
          </div>
          <div className="set">
            <div className="th">종류</div>
            <div className="td">
              <input
                type="text"
                placeholder="종류를 기재해 주세요. ex. 말티즈"
              />
            </div>
          </div>
          <div className="set">
            <div className="th">성별</div>
            <div className="td selec-btns-wrapper" ref={selectRef}>
              <button type="button" className="select-btn on">
                남아
              </button>
              <button type="button" className="select-btn">
                여아
              </button>
            </div>
          </div>
        </div>
        <div className="bottom-btns-wrapper">
          <button type="button" className="primary-btn">
            추가
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default PetName;
