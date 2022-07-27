// Welcome componenet, used as first screen. Any initial message is to be written here.
// It triggers, login component for retrieving certificate and private key in B4 app memory after trust store authentication.

import React, {Component} from 'react';
import CreateNewCert from '../login/CreateNewCert';
import Otp from '../login/Otp';

// import "./welcome.scss";

class Welcome extends Component {
   constructor(props) {
      super(props);
      this.state = {
         ExistTrustStore : null,
         userEmail: null,
         ExistEmailID : null,
      };
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this); 
   }

    async checkTrustStore() {

      const result = await fetch('http://localhost:9000/TrustStoreExists',{
         method: 'GET',
         //mode: 'no-cors',
         headers: {'Content-Type':'application/x-www-form-urlencoded'}
        });
     
        const data = await result.json();
        const obj  = data;

   // Use fetch API to check if trustStore is there. Result will be true of false.
      let existTrustStore = (obj.isTrustStoreExists === 1) ? true: false;
   // The line above is to be commented when the fetch command is implemented. Currently it is used to decide what input
   // expected from the webUI server.
   
      if(existTrustStore === true) {
         this.setState({ExistTrustStore: true,});
         this.props.status();
      }
      else { this.setState({ExistTrustStore: false,});} 
   }
   
   handleChange(event){
      this.setState({userEmail: event.target.value,});
   }
   
   handleSubmit(event){
   // Use fetch API to send email. Return will be "otp_req" or "no_trustStore"
    //  let authServerResponse = "otp_req";
   // Above line is for testing purpose, once the fetch API is implemented, then it is to be commented.
   this.handleAuthentication();
   console.log('inside submit of email')

   event.preventDefault();
   
   }

   async getAuthResponse(event) {
      const result = await fetch('http://localhost:9000/EmailIdExists',
          {
              method: 'GET',
              //mode: 'no-cors',
              headers: {'Content-Type':'application/x-www-form-urlencoded'}
          });
      
      const data = await result.json();
      const obj  = data;
      console.log(typeof data);

      let existEmailID = (obj.isEmailIDExists === 1) ? true: false;
      // The line above is to be commented when the fetch command is implemented. Currently it is used to decide what input
      // expected from the webUI server.
      
         if(existEmailID === true) {
            this.setState({ExistEmailID: true,});
            this.props.status();
         }
         else { this.setState({ExistEmailID: false,});}    
  };

   handleAuthentication(event){
      const records = {username : this.state.userEmail};
      console.log(typeof(records));
      console.log(records); 
      fetch('http://localhost:9000/Post', {
         method:'POST',
         mode:'no-cors',
         headers: {
            'Content-Type':'application/x-www-form-urlencoded'
         },
         body:JSON.stringify(records)
      }).then((response) => {
         this.getAuthResponse();
         console.log('new record added',response);
      });
      console.log("Before Auth");
  };
   
   render() {
      if(this.state.ExistTrustStore === null){
         return (
            <div>
               <h1>WELCOME TO BRIHASPATI 4</h1>
               <button onClick={this.checkTrustStore()}>
               Continue
               </button>
            </div>
         );
      };
      if (this.state.ExistTrustStore === false) {
      // Add code here to create page to get Email ID for either retreiving TrustStore, or for creating a new one.
      
         return (
            <div>
               <form onSubmit={this.handleSubmit}>
                  <label> Email ID:
                     <input type="text" name={this.state.userEmail} onChange={this.handleChange} />
                  </label><br/>
                  <input type="submit" value="Submit" />
               </form>
            </div>
         );
      
      }
      if (this.state.ExistEmailID === true){
         return(
            <div align = "center">
               <Otp />
            </div>
         )
      }
      if (this.state.ExistEmailID === false){
         return(
            <div align = "center" >
               <CreateNewCert />
            </div>
         )
      }
   }
}

export default Welcome
