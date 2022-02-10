import React from "react";
import "./project.css";

function Project({ name, description, tools, github, live, image }) {
  return (
    <div className="card-deck col-lg-3">
      <div className="card">
        <img className="card-img-top p-1 imageCard" src={process.env.PUBLIC_URL + image} alt="Project" />
        <div className="card-body">
          <h5 className="card-title cardTitle"><strong>{name}</strong></h5>
          <p className="card-text text-muted">{description}</p>
          <h5 className="card-title tools-text-title">
            Tools & Skills Used        
          <p className="card-text text-muted tools-text">{tools}</p></h5>
        </div>
        <div className="card-footer">
          <p>
            <span>Read More &#8594;</span>
            <a
              className="iconProject text-muted"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="iconProject text-muted"
              href={live}
              target="_blank"
              rel="noreferrer"
            >
              <i class="fas fa-external-link-square-alt"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
