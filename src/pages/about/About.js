import React from 'react';
import profileImg from "../../images/coding2.jpg";
import "./about.css";

function About() {
  return (
    <div className="about">
      <h1 className="text-center">COLLEEN FIMISTER</h1>
      <div className="text-block">
        <p className="text-wrapper">
          <div className="text-center">
            Technical Operations and Administrative Professional
          </div>

          <div className="text-center">Full Stack Developer</div>
          <div className="text-center">Web Designer</div>
        </p>
      </div>
      <div className="clearfix">
        <img
          src={profileImg}
          className="col-md-6 float-md-end mb-3 ms-md-3"
          alt="Profile"
        />

        <p>
          Strong leader seeking a career in software development. Experienced
          professional who strives to organize, simplify, and improve processes
          in daily operations. Skillset includes communication, teamwork,
          conflict resolution, problem-solving, technical knowledge, and
          attention to detail. Currently earning a certificate in Full Stack Web
          Development from the University of Denver’s Coding Boot Camp. Highly
          driven and organized, and can be relied upon to get the job done!
        </p>
      </div>
    </div>
  );
}
export default About;
