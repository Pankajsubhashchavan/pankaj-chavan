import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiExpo,
  SiFirebase,
} from "react-icons/si";
import { TbBrandTypescript, TbBrandReactNative } from "react-icons/tb";

function Techstack() {
  const techs = [
    { icon: <DiReact />, name: "React.js" },
    { icon: <TbBrandReactNative />, name: "React Native" },
    { icon: <SiExpo />, name: "Expo" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <TbBrandTypescript />, name: "TypeScript" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <SiRedux />, name: "Redux Toolkit" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiMui />, name: "Material-UI" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiFirebase />, name: "Firebase" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index} title={tech.name}>
          {tech.icon}
          <div style={{ fontSize: "0.22em", marginTop: "8px", fontWeight: "600", color: "#e0e0e0" }}>
            {tech.name}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
