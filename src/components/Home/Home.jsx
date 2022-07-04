import './Home.css';
import React from 'react';
import HomeSection from './HomeSection/HomeSection';
import vlad from './vlad.jpg'

function Home() {
  return (
    <div id="Home">
    <div className="home themed">
      <div className="content">
        <HomeSection
          img={vlad}
          heading={"Vladislav Zakharov"}
          info={"Full Stack Developer \n Data Scientist"}
        />
      </div>
    </div>
  </div>
  );
}

export default Home;