import './Projects.css';
import React from 'react';
import Project from './Project/Project';

import features from './features.png';

function Projects() {
  return (
    <div className='projects themed'>
      <Project 
        link={'https://data-science-hotels.web.app/'}
        heading={'Data Science for Hotels'}
        img={features}
        info={'Building model for optimizing income for business \nincome increased by 24%'}
        tools={'pandas | matplotlib | sklearn'}
      />
    </div>
  );
}

export default Projects;