import ".login.scss";

import React, {Component} from 'react'

class Login extends Component { 

state = {alias: null, pass: null}

senddata(){
this.prop.status("test")
}

   return (
      <form action="javascript:{()=> { this.setState({alias: {AliasName}, pass: {Password}}); this.senddata()}}">
         <label for="AliasName">Alias Name</label>
         <input type="text" id="AliasName" name="AliasName"/><br/>
         <label for="Password">Password</label>
         <input type="password" id="Password" name="Password"/><br/>
         <input type="submit" value="Submit"/><br/>
      </form>
          )
}

export default Login
