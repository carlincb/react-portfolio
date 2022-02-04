import React from 'react';
import Project from '../../components/project/Project';
import projectsJson from '../../utils/projects.json';
import './portfolio.css';

function Portfolio() {
  return <div className="row portfolioPage">
        { projectsJson.map(({Name, Description, Image, GitHub, Live})=>{
      return < Project image={Image} name={Name} github={GitHub} live={Live} description={Description}  />
    })}
    
  </div>;
}

export default Portfolio;
