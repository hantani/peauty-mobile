import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-lists">
        <li>
          <Link>공지사항</Link>
        </li>
        <li>
          <Link>문의하기</Link>
        </li>
        <li>
          <Link>이용약관</Link>
        </li>
        <li>
          <Link>개인정보취급방침</Link>
        </li>
        <li>
          <Link>위치기반서비스</Link>
        </li>
        <li>
          <Link>이용약관</Link>
        </li>
      </ul>
      <p className="corp-txt">@MONOCHROME Corp.</p>
    </footer>
  );
};

export default Footer;
