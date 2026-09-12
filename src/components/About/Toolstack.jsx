import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiVercel,
  SiVisualstudiocode,
  SiExpo,
  SiAndroidstudio,
} from "react-icons/si";
import { FaGooglePlay, FaAppStore, FaWindows } from "react-icons/fa";

function Toolstack() {
  const tools = [
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiExpo />, name: "Expo CLI / EAS" },
    { icon: <SiAndroidstudio />, name: "Android Studio" },
    { icon: <FaGooglePlay />, name: "Google Play Console" },
    { icon: <FaAppStore />, name: "Apple App Store" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <FaWindows />, name: "Windows" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index} title={tool.name}>
          {tool.icon}
          <div style={{ fontSize: "0.22em", marginTop: "8px", fontWeight: "600", color: "#e0e0e0" }}>
            {tool.name}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
