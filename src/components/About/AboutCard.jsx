import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pankaj Chavan</span>, based in{" "}
            <span className="purple">Pune, Maharashtra, India</span> (originally from Nashik).
            <br />
            I hold a <span className="purple">Master of Science (M.Sc.) in Computer Science</span> (2018 – 2021) from{" "}
            <i>Karmveer Abasaheb Alias N.M. Sonavane College, Satana, Nashik</i>.
            <br />
            <br />
            As a <span className="purple">React Frontend & Mobile Developer</span> with 3+ years of experience, some of my key career highlights include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building scalable web & mobile apps serving <strong>1000+ users</strong>.
            </li>
            <li className="about-activity">
              <ImPointRight /> Cross-platform mobile development with <strong>React Native, Expo, & EAS</strong> deployed to Google Play Store & Apple App Store.
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>20% reduction in load time</strong> & performance improvement through state management and component optimization.
            </li>
            <li className="about-activity">
              <ImPointRight /> Consistently delivering production-grade features with high quality & 100% client satisfaction.
            </li>
          </ul>

          <p style={{ textAlign: "justify", marginTop: "15px" }}>
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies & Exploring Tech
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Pankaj Chavan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
