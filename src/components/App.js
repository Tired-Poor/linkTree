import React from 'react'
import { Outlet } from 'react-router-dom';

import './general.css';

function App() {
  return (
    <div>

      <header className="header">
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span class="heading-primary--main">
              Zach and Drew Make Websites
            </span>
            <span class="heading-primary--sub">
              Take a look around</span>
          </h1>
        </div>
      </header>

      <Outlet context />

      <footer>
        <span id="drew-font-one">
            Developed by </span>
            <span id="drew-font-two">
              Drewford</span> 
              &nbsp; && &nbsp;
            <span id="zach-font"><b>
              Zach PowerED</b></span>
      </footer>


    </div>
  )
}

export default App;