import './HomeSection.css';
import React from "react";

const HomeSection = (props) => {
  return (
    <div className="homeSection themed">
      <img src={props.img} />
      <hr/>
      <div className="stats">
        <h1 className="heading themed">{props.heading}</h1>
        <div className="info new-line themed">{props.info}</div>
        <div className="date new-line themed">{props.date}</div>
      </div>
    </div>
  );
};

export default HomeSection;