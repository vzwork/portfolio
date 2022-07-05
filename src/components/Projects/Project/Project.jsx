import './Project.css';
import React from 'react';

function Project (props) {
  return (
    <a href={props.link}>
      <div className='project'>
        <h1 className="heading themed-color">{props.heading}</h1>
        <img src={props.img} />
        <div className="info new-line themed-color">{props.info}</div>
        <div className="tools new-line themed-color">{props.tools}</div>
      </div>
    </a>
  );
}

export default Project;