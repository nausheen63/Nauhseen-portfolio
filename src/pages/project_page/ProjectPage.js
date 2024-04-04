import React from "react";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import nyc from "../../images/Projects/Cancer gene Detection.jpg";
import ci from "../../images/Projects/MNIST.png";
import hd from "../../images/Projects/Diabeted Prediction.jpg";
import eco from "../../images/Projects/Online Book Shopping.png";
import pp from "../../images/Projects/Organ Bank.png";
import meal from "../../images/Projects/Remote Desktop Access.jpg";
import ac from "../../images/Projects/Student Management System.png";
import { FaCode } from "react-icons/fa";
export default function ProjectPage() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176" }}>PROJECTS</h1>
            </Zoom>
          </div>
          <div>
            <div>
              <Container fluid className="certificate-section" id="about">
                <Container>
                  <Row>
                    <Col md={12} className="mt-5">
                      <Row className="g-5">
                        <Col md={3} className="col-sm-12 col-md-4">
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
                                  Cancer gene Detection
                                </h5>
                                <img src={nyc} alt={nyc} />
                                <div className="project--showcaseBtn"></div>
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
                                  Developed a website using MERN Stack tools and
                                  developed a machine learning model for the
                                  identification of cancerous genes to reduce
                                  the manual labour of the
                                  Oncologist/Pathalogist.
                                </p>
                              </h6>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
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
                                <div className="project--showcaseBtn"></div>
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
                                  Developed a hybrid model using Neural network,
                                  gradient boosting and random forest with
                                  accuracy 80%. It uses the features like
                                  insulin, BMI index, etc, to predict the
                                  chances of having diabetes
                                </p>
                              </h6>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProjectPage"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectPageContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  MNIST Handwritten Digit Classification
                                </h5>
                                <img src={ci} alt={ci} />
                                <div className="project--showcaseBtn"></div>
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
                                  Developed a model using Neural Network model
                                  to identify the hand written digit image.
                                  Also, developed an image pre processing model
                                  that will process the image fit for MNIST
                                  model.
                                </p>
                              </h6>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
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
                                  Online Book Shopping
                                </h5>
                                <img src={eco} alt={eco} />
                                <div className="project--showcaseBtn"></div>
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
                                  Online book shopping software with GUI that
                                  gives list of available books to choose from
                                  and after billing generates a bill using
                                  Python libraries - Tkinter, PIL,random and
                                  other functions. It gives list of available
                                  books to choose from and after billing
                                  generates a bill.
                                </p>
                              </h6>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
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
                                <div className="project--showcaseBtn"></div>
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
                                  Developed an online organ bank software in GUI
                                  using python libraries - Tkinter, PIL, random
                                  , webbrowser and sqlite3 and connected it with
                                  database. It creates a database of the user
                                  credentials , organ receiver, generates a
                                  certificate with receiver name on it, gives
                                  user a list of organ doners (from database) to
                                  choose from, creates the database of user
                                  information taken from the user.
                                </p>
                              </h6>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
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
                                <img src={meal} alt={meal} />
                                <div className="project--showcaseBtn"></div>
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
                                  Implemented a program that gives remote access
                                  of desktop from host to client using
                                  client-server TCP/IP architecture with help of
                                  socket programming in python and added GUI for
                                  user experience. The "client" computer can
                                  connect to the "host" computer from a distance
                                  using the "Remote Desktop" client application.
                                  The programs and files on the host device are
                                  then accessible to users from anywhere and can
                                  be used.
                                </p>
                              </h6>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
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
                                  Student Management System
                                </h5>
                                <img src={ac} alt={ac} />
                                <div className="project--showcaseBtn"></div>
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
                                  To develop a system that can manage student
                                  records in a school , records easily
                                  accessible in minutes at school/colleges by
                                  using php ,mysql as backend and html, css, php
                                  as front end. It is a sleek web database
                                  application that is very responsive. With this
                                  system, school administrators can easily
                                  manage students’ records, and courses.
                                </p>
                              </h6>
                            </div>
                          </Fade>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Container>
            </div>
          </div>
        </Container>
      </Container>
    </section>
  );
}
