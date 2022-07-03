import './Projects.css';
import React from "react";
import ProjectPreview from "./ProjectPreview/ProjectPreview";
import vlad from "../../assets/vlad.jpg";
import nscc from "../../assets/nscc.jpg";
import yandex from "../../assets/yandex.jpg";

const Projects = () => {
  return (
    <div id="Projects">
      <div className="container">
        <div className="content">
          <ProjectPreview
            img={vlad}
            heading={"Vladislav Zakharov"}
            info={"Full Stack Developer \n Data Scientist"}
          />
 
          <ProjectPreview
            img={nscc}
            heading={"Education"}
            info={
              "North Seattle Community College \n BS Application Development"
            }
          />

          <ProjectPreview
            img={yandex}
            heading={"Education"}
            info={
              "Yandex Practicum Data Science Plus \n Data Analysis with pandas"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;