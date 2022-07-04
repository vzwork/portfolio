import './Home.css';
import React from 'react';
import HomeSection from './HomeSection/HomeSection';
import vlad from './vlad.jpg';
import nscc from './nscc.jpg';
import yandex from './yandex.jpg';
import floop from './floop.jpg';

function Home() {
  return (
    <div id="Home">
    <div className="home">
      <div className="content">
        <HomeSection
          img={vlad}
          heading={"Vladislav Zakharov"}
          info={"Full Stack Developer \nData Scientist \nvladislav.zakharov.work@gmail.com"}
        />
        <HomeSection
          img={floop}
          heading={"Intern at Floop"}
          info={"Implemented Features \nRefractored code"}
        />
        <HomeSection
          img={nscc}
          heading={"College"}
          info={"Application Development BS"}
        />
        <HomeSection
          img={yandex}
          heading={"Yandex"}
          info={"Data Science Bootcamp"}
        />
      </div>
    </div>
  </div>
  );
}

export default Home;