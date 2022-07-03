import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BiAdjust } from "react-icons/bi";

import Navbar from "./components/Navbar/Navbar";
import Home from './components/home/Home';
import Projects from "./components/Projects/Projects";

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
      <div className={'theme ' + (this.state.light ? 'theme--light' : 'theme--default')}>
        <BrowserRouter>
          <button className="buttonTheme" onClick={this.changeTheme}>
           <BiAdjust className="biAdjust"/>
          </button>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </div>
      </div>
    )
  }
}

export default App;