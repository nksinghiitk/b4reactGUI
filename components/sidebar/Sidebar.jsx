import React, {Component} from 'react';
import './sidebar.css';






class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
      
     }



    render(){
        return(
            <div className="sidebar">
                <div className="logo">
                    <span className="logo_name">BRIHASPATI 4</span>

                </div>
                <ul className="side-menu">
                    <li>
                        <span className="menu_name">Dashboard</span>
                    </li>

                    <li>
                        <span className="menu_name">My Profile</span>
                    </li>

                    <li>
                        <span className="menu_name">Mail</span>
                    </li>

                    <li>
                        <span className="menu_name">Files(DFS)</span>
                    </li>

                    <li>
                        <span className="menu_name">Connect(VoIP)</span>
                    </li>

                    <li>
                        <span className="menu_name">Address Book</span>
                    </li>

                    <li>
                        <span className="menu_name">Search</span>
                    </li>

                    <li>
                        <span className="menu_name">Screen Share</span>
                    </li>

                    <li>
                        <span className="menu_name">Notifications</span>
                    </li>

                    <li>
                        <span className="menu_name">Settings</span>
                    </li>

                    <li>
                        <span className="menu_name">Logout</span>
                    </li>

                </ul>

            </div>
            
        )
    }
}


export default Sidebar
