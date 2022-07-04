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
          date={"2001 - still_alive"}
        />
        <HomeSection
          img={floop}
          heading={"Intern at Floop"}
          info={"Implemented Web App Features"}
          date={"2022 May - 2022 Jun"}
        />
        <HomeSection
          img={nscc}
          heading={"North Seattle College"}
          info={"Application Development BS"}
          date={"2019 Sep - 2023 Jun"}
        />
        <HomeSection
          img={yandex}
          heading={"Yandex"}
          info={"Data Science Bootcamp"}
          date={"2021 Dec - 2023 May"}
        />
      </div>
    </div>
  </div>
  );
}

export default Home;