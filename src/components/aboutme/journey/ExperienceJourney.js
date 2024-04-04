import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date=" Jan 2024 - Continuing"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            BNY Mellon Pvt. Ltd.
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Production Service Intern
          </h6>
          <p>
          Working on the RSA and Service Now portal Automation using UI path
          </p>
          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=" Jun, 2022 -  Jul, 2022
          "
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">QuantEM JEE</h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Web Development Intern
          </h6>
          <p>Key Skills: MERN Stack DevOps AWS</p>
          <p>
            Through the exploration of various EdTech websites in the market,
            filtered out the requirements and necessity for the institute.
          </p>
          <p>
            Redeveloped and redesigned QuantEM JEE Academy Web page using tools
            like HTML, CSS, Javascript and hosted on AWS.
          </p>
          <p>
            Using MERN Stack Tools,created a website Saral Physics - online
            learning platform, hosted it on AWS, and integrated the payment
            gateway.
          </p>
          <p>
            • Skilled in collecting and compiling monthly reports, conducting
            inventory analysis for month-end, quarterly, and year-end closing,
            and submitting reports in accordance with management requirements.
          </p>
          <p>
            • Proficient in developing and maintaining various reporting
            dashboard, technical support to end-users, diagnosing hardware and
            software issues, and collaborating with IT teams to promptly resolve
            system-related problems.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
