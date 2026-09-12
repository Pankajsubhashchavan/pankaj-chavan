import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>React & React Native Developer</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Pankaj Chavan</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/panku-chavan/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/pankaj-chavan-9ba6681ba/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:pankajchavan963@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="email"
              >
                <MdEmail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/panku_chavan"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="twitter"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/panku_chavan/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="instagram"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
