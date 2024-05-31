import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { publicUrl } from "../../Variable/variable";
import Menu from "../Menu/Menu";

const $html = document.querySelector("html");

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [myToggle, setMyToggle] = useState(false);
  const headerRef = useRef();
  const myBtnRef = useRef();

  const onClick = () => {
    setToggle((prevState) => !prevState);
    if (toggle === false) {
      $html.classList.add("locked");
    } else {
      $html.classList.remove("locked");
    }
  };

  const onMyClick = () => {
    setMyToggle((prevState) => !prevState);
  };

  useEffect(() => {
    if (window.screenY > 80) {
      headerRef.current.classList.add("fixed");
    }

    window.addEventListener("scroll", () => {
      if (headerRef.current) {
        if (window.scrollY > 80) {
          headerRef.current.classList.add("fixed");
        } else {
          headerRef.current.classList.remove("fixed");
        }
      }
    });
  }, []);

  useEffect(() => {
    if (myBtnRef.current) {
      if (myToggle) {
        myBtnRef.current.classList.add("on");
      } else {
        myBtnRef.current.classList.remove("on");
      }
    }
  }, [myToggle]);

  return (
    <div className="top-menu" ref={headerRef}>
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
            <Link to="/sign-up" className="log-in"></Link>
            <button
              type="button"
              className="my"
              onClick={onMyClick}
              ref={myBtnRef}
            ></button>
            <button
              type="button"
              className="close-btn"
              onClick={onClick}
            ></button>
          </div>
        )}
      </header>
      <Menu toggle={toggle} myToggle={myToggle} />
    </div>
  );
};

export default Header;
