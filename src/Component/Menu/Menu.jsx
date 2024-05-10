import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = ({ toggle }) => {
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
          <Link>PEAUTY</Link>
        </li>
        <li>
          <Link>스타일리스트</Link>
        </li>
        <li>
          <Link>스타일샵</Link>
        </li>
        <li>
          <Link>스타펫</Link>
        </li>
        <li>
          <Link>이용안내</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
