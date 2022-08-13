import React, {Component} from 'react'

class MessageLogin extends Component {
    
    render() {
        if(this.props.status === 'failure') {
            return ( <div className="MessageLogin">The Alias Name or Password is incorrect.</div>);
        }
        if(this.props.status === 'noTrustStore') {
            return ( <div className="MessageLogin">There is no trust store. Either recover it, or create new
                identity Certificate</div>
            ); 
        }       
    } 
}

export default MessageLogin
