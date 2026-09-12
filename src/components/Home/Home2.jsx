import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePic from "../../Assets/profilePic.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate <b className="purple">React Frontend & Mobile Developer</b> with
              over <b className="purple">3 years of professional experience</b> building
              scalable web applications and cross-platform mobile apps.
              <br />
              <br />
              My core strengths span modern languages like
              <i>
                <b className="purple"> TypeScript </b>
              </i>
              and
              <i>
                <b className="purple"> JavaScript (ES6+)</b>
              </i>.
              <br />
              <br />
              I specialize in crafting responsive web and mobile user experiences using&nbsp;
              <i>
                <b className="purple">React.js, Next.js, and React Native</b>
              </i>.
              <br />
              <br />
              For mobile development, I have hands-on expertise with&nbsp;
              <i>
                <b className="purple">Expo, Expo CLI, and EAS</b>
              </i>,
              handling complete build pipelines and deployment to both the&nbsp;
              <i>
                <b className="purple">Google Play Store</b> and <b className="purple">Apple App Store</b>
              </i>.
              <br />
              <br />
              I architect clean, maintainable applications with state management via&nbsp;
              <b className="purple">Redux Toolkit, Zustand, and Context API</b>, paired with
              modern UI systems like <b className="purple">Tailwind CSS</b> and <b className="purple">Material-UI</b>,
              and robust backend integrations with <b className="purple">Node.js and RESTful APIs</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={profilePic} className="img-fluid shadow rounded-3" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-4 my-3 contact-details">
              <span className="text-white">
                <MdLocationOn className="purple me-1" style={{ fontSize: "1.3em" }} />
                Pune, Maharashtra, India
              </span>
              <a href="mailto:pankajchavan963@gmail.com" className="text-white text-decoration-none">
                <MdEmail className="purple me-1" style={{ fontSize: "1.3em" }} />
                pankajchavan963@gmail.com
              </a>
              <a href="tel:+919309806745" className="text-white text-decoration-none">
                <MdPhone className="purple me-1" style={{ fontSize: "1.3em" }} />
                +91 9309806745
              </a>
            </div>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/panku-chavan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pankaj-chavan-9ba6681ba/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:pankajchavan963@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="email"
                >
                  <MdEmail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/panku_chavan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/panku_chavan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
