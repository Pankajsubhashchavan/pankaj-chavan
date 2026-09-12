import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view h-100">
      <div style={{ overflow: "hidden", maxHeight: "200px" }}>
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
      </div>
      <Card.Body className="d-flex flex-column justify-content-between p-3">
        <div>
          <Card.Title className="purple fw-bold mb-2" style={{ fontSize: "1.25em" }}>
            {props.title}
          </Card.Title>
          <Card.Text style={{ textAlign: "justify", fontSize: "0.92em", color: "#d1d5db" }}>
            {props.description}
          </Card.Text>
        </div>

        <div>
          {props.techStack && props.techStack.length > 0 && (
            <div className="d-flex flex-wrap gap-1 justify-content-center my-3">
              {props.techStack.map((tech, idx) => (
                <span key={idx} className="project-tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="d-flex justify-content-center gap-2 mt-2">
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              className="d-flex align-items-center"
            >
              <BsGithub className="me-1" />
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>

            {!props.isBlog && props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                className="d-flex align-items-center"
              >
                <CgWebsite className="me-1" />
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
