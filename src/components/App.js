import React from 'react'
import { Outlet } from 'react-router-dom';

import './general.css';

function App() {
  return (
    <div>Zach and Drew Make Websites

      <Outlet context />
    </div>
  )
}

export default App;