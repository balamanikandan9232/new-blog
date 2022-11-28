import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="boxItems">
        <div className="container flex">
          <p> Balamanikandan </p>
          <div className="social">
            <BsFacebook className="icon" />
            <RiInstagramFill className="icon" />
            <AiFillTwitterCircle className="icon" />
            <AiFillLinkedin className="icon" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
