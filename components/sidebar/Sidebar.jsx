import React, {Componenet} from 'react';

import "./sidebar.scss";                 //this imports the style file of sidebar

import DashboardIcon from '@mui/icons-material/Dashboard'; //these are various imports of icons from material-ui (google free lib) icons site
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import DuoOutlinedIcon from '@mui/icons-material/DuoOutlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ScreenShareOutlinedIcon from '@mui/icons-material/ScreenShareOutlined';


const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top"><span className="logo">BRIHASPATI-4</span></div>

        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon" />
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>

                <li>
                    <AccountCircleOutlinedIcon className="icon" />
                    <span>My Profile</span>
                </li>
                

                <li>
                    <EmailOutlinedIcon className="icon" />
                    <span>Mail</span>
                </li>

                <li>
                    <BackupTableOutlinedIcon className="icon"/>
                    <span>Files(DFS)</span>
                </li>

                <li>
                    <ForumOutlinedIcon className="icon"/>
                    <span>Chat(SMS)</span>
                </li>
                
                 <li>
                     <DuoOutlinedIcon className="icon" />
                    <span>Connect(VOIP)</span>
                </li>

                <li>
                    <ImportContactsOutlinedIcon className="icon" />
                    <span>AddressBook</span>
                </li>

                
                <li>
                    <SearchOutlinedIcon className="icon" />
                    <span>Search</span>
                </li>

                
                <li>
                    <ScreenShareOutlinedIcon className="icon" />
                    <span>ScreenShare</span>
                </li>
              

                <li>
                    <NotificationsOutlinedIcon className="icon" />
                    <span>Notifications</span>
                </li>

                <li>
                    <SettingsOutlinedIcon className="icon" />
                    <span>Settings</span>
                </li>

                <li>
                    <LockOutlinedIcon className="icon" />
                    <span>Logout</span>
                </li>
                
                
                
                
                
            </ul>
        </div>
        <div className="bottom"></div>
    </div>
  )
}

export default Sidebar
