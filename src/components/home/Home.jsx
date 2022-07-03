import './Home.css';
import React from 'react';
import HomeSection from "./HomeSection/HomeSection";
import vlad from "../../assets/vlad.jpg";
import nscc from "../../assets/nscc.jpg";
import yandex from "../../assets/yandex.jpg";

const Home = () => {
  return (
    <div id="Home">
      <div className="container">
        <div className="content">
          <HomeSection
            img={vlad}
            heading={"Vladislav Zakharov"}
            info={"Full Stack Developer \n Data Scientist"}
          />
 
          <HomeSection
            img={nscc}
            heading={"Education"}
            info={
              "North Seattle Community College \n BS Application Development"
            }
          />

          <HomeSection
            img={yandex}
            heading={"Education"}
            info={
              "Yandex Practicum Data Science Plus \n Data Analysis with pandas"
            }
          />

          <HomeSection
            img={nscc}
            heading={"Education"}
            info={
              "North Seattle Community College \n BS Application Development"
            }
          />

          <HomeSection
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

export default Home;