import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UserMenu.css";

const UserMenu = ({ myToggle }) => {
  const [myPet, setMyPet] = useState(false);
  //   const [reserv, setReserv] = useState(false);
  //   const [setting, setSetting] = useState(false);
  const userMenuRef = useRef();
  const myPetBtnRef = useRef();

  const myPetOnClick = () => {
    setMyPet((prevState) => !prevState);
    if (myPet === false) {
      myPetBtnRef.current.classList.add("on");
    } else {
      myPetBtnRef.current.classList.remove("on");
    }
  };

  useEffect(() => {
    if (myToggle) {
      userMenuRef.current.classList.add("on");
    } else {
      userMenuRef.current.classList.remove("on");
    }
  }, [myToggle]);

  return (
    <ul className="user-menu" ref={userMenuRef}>
      <li>
        <button type="button" onClick={myPetOnClick} ref={myPetBtnRef}>
          <span className="txt">My Pet</span>
          <span className="arrow"></span>
        </button>
        {myPet && (
          <ul className="sub-menu">
            <li>
              <Link>Pet Name</Link>
            </li>
            <li>
              <Link>캘린더</Link>
            </li>
            <li>
              <Link>사진</Link>
            </li>
          </ul>
        )}
      </li>
      <li>
        <button type="button">
          <span className="txt">예약하기</span>
          <span className="arrow"></span>
        </button>
      </li>
      <li>
        <button type="button">
          <span className="txt">설정</span>
          <span className="arrow"></span>
        </button>
      </li>
    </ul>
  );
};

export default UserMenu;
