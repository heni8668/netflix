import React from "react";

import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
const Footer = () => {
  return (
    <Container>
      <div className="container">
        <div className="footer_icons">
          <FaFacebook />
          <FaInstagram />
          <IoLogoYoutube />
        </div>

        <div className="footer_data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Invester Relations</li>
              <li>Legal Notices</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Centers</li>
              <li>Jobs</li>
              <li>Cookies Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="service">
          <span>Service Code</span>
        </div>
        <div className="copy_right">1977-2024 Netflix, Inc.</div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  color: gray;
  display: flex;
  justify-content: center;
  .container {
    width: 60%;
    .footer_icons {
      width: 12%;
      display: flex;
      justify-content: space-between;
      margin-left: 10px;
      color: white;
      margin-bottom: 10px;
      cursor: pointer;
      svg {
        font-size: 1.8rem;
      }
    }
    .footer_data {
      display: flex;
      justify-content: space-between;
      margin-left: 10px;
      color: #808080;
      margin-bottom: 20px;
      font-size: 18px;

      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 12vh;
      }
      li {
        cursor: pointer;
        &:hover {
          opacity: 0.8;
          color: white;
        }
      }
    }
    .service {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #808080;
      padding-bottom: 5px;
      &:hover {
        color: white;
        opacity: 0.8;
      }
    }
    .copy_right {
      display: flex;
      justify-content: center;
      color: #808080;
      margin-bottom: 20px;
    }
    .copy_right::before {
      content: "\\00a9";
    }
  }
`;
export default Footer;
