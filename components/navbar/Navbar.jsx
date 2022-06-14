import React, {Componenet} from 'react';

import "./navbar.scss";

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';



const Navbar = () => {
  return (                                     //inside navbar->wrapper -> this will contain icons on the right side of navbar
    <div className="navbar">
      <div className="wrapper">

        <div className="items">

          <div className="item">
            <AccountCircleOutlinedIcon className="icon"/>
          </div>

          <div className="item">
            <NotificationsOutlinedIcon className="icon"/>
            <div className="counter">1</div>
          </div>

          <div className="item">
            <SettingsOutlinedIcon className="icon" />
          </div>
          
        </div>
        
        </div>                                      
    </div>
    
  )
}

export default Navbar
