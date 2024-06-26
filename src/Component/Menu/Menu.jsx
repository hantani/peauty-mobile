import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import UserMenu from "../UserMenu/UserMenu";

const Menu = ({ toggle, myToggle }) => {
  const menuRef = useRef();

  useEffect(() => {
    if (toggle === true) {
      menuRef.current.classList.add("on");
    } else {
      menuRef.current.classList.remove("on");
    }
  }, [toggle]);

  return (
    <div className="menu-wrapper" ref={menuRef}>
      <ul className="main-menu">
        <li>
          <Link to="/peauty">PEAUTY</Link>
        </li>
        <li>
          <Link to="/stylist">스타일리스트</Link>
        </li>
        <li>
          <Link to="/style-shop">스타일샵</Link>
        </li>
        <li>
          <Link to="/star-pet">스타펫</Link>
        </li>
        <li>
          <Link to="/info-use">이용안내</Link>
        </li>
      </ul>
      <UserMenu myToggle={myToggle} />
    </div>
  );
};

export default Menu;
