import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BiAdjust } from 'react-icons/bi';
import { VscGithub } from 'react-icons/vsc';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      light: false
    }

    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme() {
    this.setState({ light: !this.state.light })
  }

  render() {
    return (
      <div id="App">
        <div className={(this.state.light ? 'theme--light' : 'theme--default')}>
          <BrowserRouter>
            <button className="buttonTheme" onClick={this.changeTheme}>
            <BiAdjust className="biAdjust btn"/>
            </button>
            <a href='https://github.com/vzwork' className='githubLink'>
              <VscGithub className='githubIcon btn themed'/>
            </a>
            <a href='https://www.linkedin.com/in/vzwork/' className='linkedinLink'>
              <TiSocialLinkedinCircular className='linkedinIcon btn themed'/>
            </a>
            <Navbar />
            <div className='wide tall center pd-top-50 themed'>
              <div className='container'>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Projects" element={<Projects />} />
                </Routes>
              </div>
            </div>
          </BrowserRouter>
        </div>
      </div>
    )
  }
}

export default App;
