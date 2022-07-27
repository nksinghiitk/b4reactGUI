import React, {Component} from 'react';
import Login from './Login';

class Otp extends Component {
   constructor(props) {
      super(props);
      this.state = {
         userOtp: null,
         OtpCorrect: null,
      };
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this); 
   }

   handleChange(event){
      this.setState({userOtp: event.target.value,});
   }
   
   handleSubmit(event){
   
   this.handleAuthentication();
   console.log('inside submit of otp')

   event.preventDefault();
   
   }

   async getAuthResponse(event) {
      const result = await fetch('http://localhost:9000/VerifyOtp',
          {
              method: 'GET',
              //mode: 'no-cors',
              headers: {'Content-Type':'application/x-www-form-urlencoded'}
          });
      
      const data = await result.json();
      const obj  = data;
      console.log(typeof data);

      
      let verifyOtp = (obj.isOtpCorrect === 1) ? true: false;
      // The line above is to be commented when the fetch command is implemented. Currently it is used to decide what input
      // expected from the webUI server.
      
         if(verifyOtp === true) {
            this.setState({OtpCorrect: true,});
            this.props.status();
         }
         else { this.setState({OtpCorrect: false,});}  
      

      
  }

  handleAuthentication(event){
      const records = {username : this.state.userOtp};
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
      if (this.state.OtpCorrect === true){
         <div>
            <Login />
         </div>
      }
      else {
         //invoke error message, with new generate otp.
      }
      return (
         <div >
              <form onSubmit={this.handleSubmit}>
                  <label> Enter OTP:
                     <input type="text" name={this.state.userOtp} onChange={this.handleChange} />
                  </label><br/>
                  <input type="submit" value="Submit" />
               </form>
         </div>
        
      ) 
      

   }
}

export default Otp;
