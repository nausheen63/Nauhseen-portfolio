import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import nyc from "../../images/Projects/Cancer gene Detection.jpg";
import ci from "../../images/Projects/Remote Desktop Access.jpg";
import hd from "../../images/Projects/Diabeted Prediction.jpg";
import pp from "../../images/Projects/Organ Bank.png";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Projects() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Projects</h1>
              </Zoom>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Cancer Gene Detection
                    </h5>
                    <img src={nyc} alt={nyc} />
                    <div className="project--showcaseBtn">
                     
                     
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Developed a website using MERN Stack tools and developed a
                      machine learning model for the identification of cancerous
                      genes to reduce the manual labour of the
                      Oncologist/Pathalogist.
                    </p>
                  </h6>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Diabeted Prediction
                    </h5>
                    <img src={hd} alt={hd} />
                    <div className="project--showcaseBtn">
                      
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Developed a hybrid model using Neural network, gradient
                      boosting and random forest with accuracy 80%. It uses the
                      features like insulin, BMI index, etc, to predict the
                      chances of having diabetes.
                    </p>
                  </h6>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Remote Desktop Access
                    </h5>
                    <img src={ci} alt={ci} />
                    <div className="project--showcaseBtn">
                      
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Implemented a program that gives remote access of desktop
                      from host to client using client-server TCP/IP
                      architecture with help of socket programming in python and
                      added GUI for user experience. The "client" computer can
                      connect to the "host" computer from a distance using the
                      "Remote Desktop" client application.
                    </p>
                  </h6>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Organ Bank
                    </h5>
                    <img src={pp} alt={pp} />
                    <div className="project--showcaseBtn">
                     
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Developed an online organ bank software in GUI using
                      python libraries - Tkinter, PIL, random , webbrowser and
                      sqlite3 and connected it with database. It creates a
                      database of the user credentials , organ receiver,
                      generates a certificate with receiver name on it, gives
                      user a list of organ doners (from database) to choose
                      from, creates the database of user information taken from
                      the user.
                    </p>
                  </h6>
                </div>
              </Fade>
            </Col>
          </Row>
          <div className="blog--viewAll">
            <Link to="/projectspage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}
