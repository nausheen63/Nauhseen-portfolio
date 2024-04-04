import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple">Nausheen Aftab </b>
                and I am a{" "}
                <b className="purple">Computer Science and Engineering </b>
                student at <b className="purple">MIT Academy of Engineering </b>
                in Pune, India.
                <br />
                <br />
                My skill stets includes various programing languages, subjects
                and libraries such as &nbsp;
                <b className="purple">
                  {" "}
                  C, C++, Python, HTML, CSS, Machine Learning, Data Science,
                  SQL, Data Structure .{" "}
                </b>
                <br />
                <br />I also have experience in working with frameworks and
                libraries such as &nbsp;
                <b className="purple"> OpenCV, Pandas, and NumPy. </b>
                <br />
                <br />I like to explore new ML models and Data Analytic tools
                like &nbsp;
                <b className="purple"> Tableau and Power BI.</b>
                <br />
                <br />I am a very passionate learner and enthusiastic person
                with positive attitude towards life. &nbsp;
                <br />
                <br />In my me time I like to enjoy reading books, singing, travelling and photography. &nbsp;
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
