import React from 'react';
import Sidebar from './cpmponent/sidebar/Sidebar';
import Topbar from './cpmponent/topbar/Topbar';
import './app.css'
import Home from './home/Home';

const App = () => {
  return (
    <div>
      <Topbar></Topbar>
      <div className="container">
        <Sidebar></Sidebar>
        <Home></Home>
      </div>
    </div>
  );
};

export default App;