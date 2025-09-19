import React from "react";
import { Card, CardBody, Col, Button } from "reactstrap";
import { ProjectType } from "../types/sections";

const ProjectsCard = ({ name, desc, github, link, img }: ProjectType) => {
  return (
    <Col lg="6">
      <Card className="shadow-lg--hover shadow mt-4">
        <CardBody>
          <div className="d-flex flex-column px-3">
            {/* Project Title as clickable link */}
            {github ? (
              <h3>
                <a href={github} target="_blank" rel="noopener noreferrer">
                  {name}
                </a>
              </h3>
            ) : link ? (
              <h3>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {name}
                </a>
              </h3>
            ) : (
              <h3>{name}</h3>
            )}

            {/* Description */}
            <p className="description mt-3">{desc}</p>

            {/* Project Image */}
            {img && (
              <img
                src={img}
                alt={name}
                className="img-fluid mt-3"
                style={{ borderRadius: "0.5rem" }}
              />
            )}

            {/* Buttons */}
            <div className="mt-3">
              {github && (
                <Button
                  className="btn-icon mr-2"
                  color="github"
                  href={github}
                  target="_blank"
                  rel="noopener"
                  aria-label="Github"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github" />
                  </span>
                </Button>
              )}
              {link && (
                <Button
                  className="btn-icon"
                  color="success"
                  href={link}
                  target="_blank"
                  rel="noopener"
                  aria-label="Demo"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-arrow-right mr-2" />
                  </span>
                  <span className="nav-link-inner--text ml-1">Demo</span>
                </Button>
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectsCard;
