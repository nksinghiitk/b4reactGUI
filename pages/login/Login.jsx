// This componenet, gets alias and password for truststore from user. Sends it to B4 app,
// If aliasName and password is correct, calling component is informed of the success.
// If failure then status changed to false and same component is used for repeat entry
// of aliasName and Password. Also buttons to truststore recovery and recreation of truststore
// are made available.

//import "./login.scss";

import React, {Component} from 'react';
import MessageLogin from './MessageLogin';
import RecoverTrustStore from './RecoverTrustStore';
import CreateNewCert from './CreateNewCert';

class Login extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
           AlName: null,
           PassWord: null,
           status: null,
           
        };
        this.handleChangePass =this.handleChangePass.bind(this);
        this.handleChangeAlias =this.handleChangeAlias.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangePass(event) {
        this.setState({PassWord: event.target.value});
    }

    handleChangeAlias(event) {
        this.setState({AlName:event.target.value});
    }

    handleSubmit(event) {
        
//        alert("AliasName "+this.state.AlName+"Password "+this.state.PassWord);
        
//  Fetch the http response to request sent to B4 app with argument (aliasName, password).
//  Response should be either success, failure, trustStore does not exist.
//  If failure is received, this.state.status = failure
//  If noTrustStore is received, this.state.status = noTrustStore
//  If success is received, this.prop.status(true) is invoked.
        
      
        this.handleAuthentication();
        console.log('inside submit of login')
        // console.log(fetchReturn);
         //this.setState({status : fetchReturn,});   
       // if(fetchReturn === 'success') this.props.statusFromLogin(true);
        //this.props.statusFromLogin(true);
        event.preventDefault();
    }

    async getAuthResponse(event) {
        const result = await fetch('http://localhost:9000/Auth',
            {
                method: 'GET',
                //mode: 'no-cors',
                headers: {'Content-Type':'application/x-www-form-urlencoded'}
            });
        
        const data = await result.json();
        const obj  = data;
        console.log(typeof data);
        
  
        if (obj.isUserAuthenticated === 1){
           
            console.log("happy working");
            this.setState({status : 'success',}); 
            this.props.statusFromLogin(true);

        } else{
            this.setState({status : 'failure',}); 
            this.props.statusFromLogin(false);
        }
        
    }
  
    handleAuthentication(event){
        const records = {username : this.state.AlName, password : this.state.PassWord};
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
 // rendering of first time login screen, login screen after failure or noTrustStore.
        return(
            <div className="Login">
                <div> <MessageLogin status={this.state.status} /> <br/>
                
                    <form onSubmit={this.handleSubmit}>
                                 <label>Alias Name: <input type="text" name={this.state.AlName} onChange={this.handleChangeAlias} />
                                 </label><br/>
                                 <label>Password:
                                 <input type="password" name={this.state.PassWord} onChange={this.handleChangePass} />
                                 </label><br/>                             
                        <input type="submit" value="Submit"/>
                    </form> <br/>
                    <button >Recovery of trust store</button>  <span></span>
                    <button >Create new certificate</button>
                </div>
                {/*<RecoverTrustStore /> &nbsp; <CreateNewCert /> */}
            </div>
        )
// RecoverTrustStore.jsx and CreateNewCert.jsx to be created. TBD        
    }
}

export default Login
