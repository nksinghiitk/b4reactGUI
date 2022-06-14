import React, { Component } from 'react';
import Welcome from './pages/welcome/Welcome';
import Login from './pages/login/Login';
import './App.css';

class App extends Component {
  constructor(props){
     super(props);
     this.state = {
        b4scrn: 'welcome',
        credentials: [null,null],
     };
  }
  
  changeToLogin(){
     this.setState({b4scrn: 'login',});
  }
  
  changeToWelcome = (aliasName) => {
     this.setState({b4scrn: 'welcome', credentials:[{aliasName}, null],});
  }

  render() {
    if(this.state.b4scrn === 'welcome'){
       return (
          <div className="WelcomeBack">
             <Welcome status={this.changeToLogin} />
          </div>
       );
    }
    if(this.state.b4scrn === 'login'){
       return (
          <div className="login">
             <Login status={() =>this.changeToWelcome} />
             {this.state.credentials}
          </div>
       );
    }
  }
}

export default App;
