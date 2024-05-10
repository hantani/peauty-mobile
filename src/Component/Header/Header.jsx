import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { publicUrl } from "../../Variable/variable";
import Menu from "../Menu/Menu";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const onClick = () => {
    setToggle((prevState) => !prevState);
    console.log(toggle);
  };

  return (
    <div className="top-menu">
      <header className="top-header">
        <Link className="top-logo" to="/">
          <img src={publicUrl + "/img/top-logo.png"} alt="top-logo" />
        </Link>
        {toggle === false ? (
          <button type="button" className="hamburger-btn" onClick={onClick}>
            <img src={publicUrl + "/img/hamburger.png"} alt="hamburger-btn" />
          </button>
        ) : (
          <div className="btns-wrapper">
            <button type="button" className="log-in"></button>
            <button type="button" className="my"></button>
            <button
              type="button"
              className="close-btn"
              onClick={onClick}
            ></button>
          </div>
        )}
      </header>
      <Menu toggle={toggle} />
    </div>
  );
};

export default Header;
