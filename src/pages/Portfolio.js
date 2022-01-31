import Project from '../components/Project';
import projectsJson from '../utils/projects.json';

function Portfolio() {
  return <div>
    { projectsJson.map(({Name, Description})=>{
      return < Project name={Name} description={Description}/>
    })}
  </div>;
}

export default Portfolio;
