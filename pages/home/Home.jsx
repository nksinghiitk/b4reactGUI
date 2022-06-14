import React, {Component} from 'react';

import Sidebar from "../../components/sidebar/Sidebar";
import './home.scss'
import Navbar from "../../components/navbar/Navbar";

export const Home = () => {
  return (
    <div
        className="home">                            
        <Sidebar />

        <div className="homeContainer">
          <Navbar/>
          home container
        
        </div>

    </div>
  )
}

export default Home
