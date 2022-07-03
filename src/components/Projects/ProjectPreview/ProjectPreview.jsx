import './ProjectPreview.css';
import React from "react";

const ProjectPreview = (props) => {
  return (
    <div className="projectPreview">
      <a href={props.link} className="link">
        <h1 className="heading">{props.heading}</h1>
        <img src={props.img} />
        <div className="info new-line">{props.info}</div>
      </a>
    </div>
  );
};

export default ProjectPreview;