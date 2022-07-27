import React, {Component} from 'react';

class CreateNewCert extends Component {
   constructor(props) {
      super(props);
      this.state = {
         Email: null,
         OrganizationUnit: null,
         Organization: null,
         City: null,
         State: null,
         Country: null,

         status: null,
         
      };
      this.handleChangeEmail =this.handleChangeEmail.bind(this);
      this.handleChangeOrganizationUnit =this.handleChangeOrganizationUnit.bind(this);
      this.handleChangeOrganization =this.handleChangeOrganization.bind(this);
      this.handleChangeCity =this.handleChangeCity.bind(this);
      this.handleChangeState =this.handleChangeState.bind(this);
      this.handleChangeCountry =this.handleChangeCountry.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail(event) {
      this.setState({Email: event.target.value});
  }

  handleChangeOrganizationUnit(event) {
      this.setState({OrganizationUnit:event.target.value});
  }

  handleChangeOrganization(event) {
   this.setState({Organization: event.target.value});
   }

handleChangeCity(event) {
   this.setState({City: event.target.value});
   }

handleChangeState(event) {
   this.setState({State: event.target.value});
   }

handleChangeCountry(event) {
   this.setState({Country: event.target.value});
   }

   handleSubmit(event) {
              this.handleAuthentication();
              console.log('inside submit of login')
         
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
      return (
         <div className="CreateNewCert">
              <div>  <br/>
                <form onSubmit={this.handleSubmit}>
                             <label>Email Id: <input type="text" name={this.state.Email} onChange={this.handleChangeEmail} />
                             </label><br/>
                             <label>Organization Unit:
                             <input type="text" name={this.state.OrganizationUnit} onChange={this.handleChangeOrganizationUnit} />
                             </label><br/>
                             <label>Organization:
                             <input type="text" name={this.state.Organization} onChange={this.handleChangeOrganization} />
                             </label><br/> 
                             <label>City:
                             <input type="text" name={this.state.City} onChange={this.handleChangeCity} />
                             </label><br/> 
                             <label>State:
                             <input type="text" name={this.state.State} onChange={this.handleChangeState} />
                             </label><br/>
                             <label>Country:
                             <input type="text" name={this.state.Country} onChange={this.handleChangeCountry} />
                             </label><br/>                               
                    <input type="submit" value="Submit"/>
                </form> <br/>
            </div>
         
         </div>
      )  
   }
}

export default CreateNewCert;
