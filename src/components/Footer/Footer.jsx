import React from "react";
import { FooterContainer } from "./FooterSTyle.js";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <FooterContainer>
      <div className="socialMedia">
        <div className="socialMediaItem">
          <FaInstagram />
        </div>
        <div className="socialMediaItem">
          <FaXTwitter />
        </div>
        <div className="socialMediaItem">
          <FaFacebook />
        </div>
        <div className="socialMediaItem">
          <FaYoutube />
        </div>
      </div>
      <div className="navigation">
        <a href="/">Home</a>
        <a href="/">Testimonial</a>
        <a href="/">Contact Us</a>
      </div>
      <div className="copyRight">
        <p>
          CopyRight &copy;2024, Create by <span>Jason</span>
        </p>
      </div>
    </FooterContainer>
  );
}
