import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { ImPointRight } from "react-icons/im";
import { GiPostOffice } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { MdOutlineSettingsRemote, MdWorkOutline } from "react-icons/md";

const experiences = [
  {
    role: "ReactJS Developer",
    company: "Prominno Labs Private Limited, Pune",
    period: "February 2025 – Present",
    isCurrent: true,
    remote: false,
    bullets: [
      "Developed and maintained scalable React-based web applications serving 1000+ users.",
      "Built reusable UI components and optimized rendering performance using best React practices.",
      "Improved application performance by 20% through efficient state management (Redux, Context API, Zustand).",
      "Integrated REST APIs and collaborated with backend teams on request/response payload structures.",
      "Diagnosed and resolved production bugs to improve application stability and user experience.",
      "Handled cross-platform mobile development workflows using React Native, Expo, and EAS for production builds.",
    ],
    skills: [
      "React.js",
      "React Native",
      "Expo",
      "EAS",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Zustand",
      "Context API",
      "REST APIs",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "Apexinfy Technologies (OPC) Pvt. Ltd., Kolkata",
    period: "January 2023 – January 2025",
    isCurrent: false,
    remote: true,
    bullets: [
      "Developed and maintained 3+ production-level web applications using React.js, TypeScript, and Redux.",
      "Designed responsive and user-friendly interfaces using Material-UI and Tailwind CSS.",
      "Integrated third-party APIs to extend application features and meet business requirements.",
      "Worked closely with UI/UX designers, backend developers, and QA teams to ensure timely project delivery.",
      "Achieved 100% client satisfaction through consistent delivery and quality enhancements.",
    ],
    skills: [
      "React.js",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Material-UI",
      "JavaScript",
      "HTML5/CSS3",
      "REST APIs",
    ],
  },
  {
    role: "Full Stack Web Developer Trainee",
    company: "AlmaBetter, Bangalore",
    period: "June 2022 – January 2023",
    isCurrent: false,
    remote: true,
    bullets: [
      "Completed rigorous full-stack developer training focusing on MERN stack and data structures.",
      "Built multiple full-stack projects using MongoDB, Express.js, React.js, and Node.js.",
      "Practiced clean coding principles, version control, and collaborative Git workflows.",
    ],
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Git",
    ],
  },
  {
    role: "Web Development Intern",
    company: "RB Softwares, Nashik, Maharashtra",
    period: "February 2021 – July 2021",
    isCurrent: false,
    remote: false,
    bullets: [
      "Assisted in developing frontend responsive web layouts and client interfaces.",
      "Worked with HTML, CSS, JavaScript, and backend PHP integration.",
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "PHP"],
  },
];

const Experience = () => {
  return (
    <div className="experience-section my-5">
      <h1 className="project-heading" style={{ fontSize: "2.3em" }}>
        Professional <strong className="purple">Experience</strong>
      </h1>
      <p style={{ color: "white" }}>
        A timeline of my professional roles, engineering contributions, and key achievements.
      </p>

      <div className="d-flex flex-column gap-4 text-start mt-4">
        {experiences.map((exp, idx) => (
          <Card key={idx} className="quote-card-view p-3 shadow-sm border-0">
            <Card.Body>
              <div className="d-flex flex-wrap justify-content-between align-items-start mb-2">
                <div>
                  <h3 className="text-white mb-1" style={{ fontSize: "1.4em", fontWeight: "600" }}>
                    <FaCode className="purple me-2" />
                    {exp.role}
                    {exp.isCurrent && (
                      <Badge bg="info" className="ms-2 text-dark" style={{ fontSize: "0.55em", verticalAlign: "middle" }}>
                        Current Role
                      </Badge>
                    )}
                  </h3>
                  <div className="text-info d-flex align-items-center gap-2 flex-wrap" style={{ fontSize: "1.05em" }}>
                    <span>
                      <GiPostOffice className="purple me-1" />
                      {exp.company}
                    </span>
                    {exp.remote && (
                      <Badge bg="secondary" style={{ fontSize: "0.75em" }}>
                        <MdOutlineSettingsRemote className="me-1" /> Remote
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="text-muted mt-1 mt-md-0" style={{ fontSize: "0.95em", fontWeight: "500" }}>
                  <MdWorkOutline className="purple me-1" />
                  {exp.period}
                </div>
              </div>

              <ul className="mt-3 ps-3">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="about-activity mb-2" style={{ color: "#d1d5db" }}>
                    <ImPointRight className="purple me-2" style={{ flexShrink: 0, marginTop: "4px" }} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-3 pt-2 border-top border-secondary d-flex flex-wrap gap-2 align-items-center">
                <span className="text-white fw-bold me-2" style={{ fontSize: "0.9em" }}>
                  Tech Stack:
                </span>
                {exp.skills.map((skill, sIdx) => (
                  <Badge
                    key={sIdx}
                    bg="dark"
                    className="border text-light px-2 py-1"
                    style={{ fontSize: "0.85em", borderColor: "#c770f0" }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Experience;
