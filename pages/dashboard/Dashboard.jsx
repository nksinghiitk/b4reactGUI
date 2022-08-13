import React, {Component} from 'react';

import Sidebar from '../../components/sidebar/Sidebar';





class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
      
     }



    render(){
        return(
            
           <div id='dashboard'>Hello! Welcome to Dashboard
            <Sidebar />
           </div>
          
        
        )
    }
}


export default Dashboard
