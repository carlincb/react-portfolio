import React from "react";
import Project from "../../components/project/Project";
import projectsJson from "../../utils/projects.json";
import "./portfolio.css";

function Portfolio() {
  return (
    <div className="row portfolioPage">
      <h1 className="text-center">Recent Projects</h1>
      <h2 className="text-center portfolio-h2">Want to see my work? Check out some of my recent projects!</h2>
      {projectsJson.map(({ Name, Description, Image, Tools, GitHub, Live }) => {
        return (
          <Project
            image={Image}
            name={Name}
            github={GitHub}
            live={Live}
            description={Description}
            tools={Tools}
          />
        );
      })}
    </div>
  );
}

export default Portfolio;
