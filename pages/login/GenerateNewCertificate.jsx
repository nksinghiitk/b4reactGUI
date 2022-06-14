import React, {useState, useEffect} from 'react';


import "./pagex.scss"

const GenerateNewCertificate = () => {

   const [userRegistration, setUserRegistration] = useState({
email: "",
organizationUnit: "",
organization: "",
city: "",
state: "",
country: "",
   });

   const [records, setRecords] = useState([]);

   const handleInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      console.log(name, value);

      setUserRegistration({ ...userRegistration, [name] : value});

   }

   const handleSubmit = (e) => {
      e.preventDefault();
      const newRecord = { ...userRegistration, id: new Date().getTime().toString()};
      // console.log(records);
      setRecords([ newRecord]);

      //  console.log(records);
      //   var data={"records":records};
      //  var dataJSONString=JSON.stringify(data);

      // var data = {"records" : "JSON.stringify(records)"};
      //  console.log("data is : " + dataJSONString);
      console.log(typeof(records));
      console.log(records);
      fetch('http://localhost:9000/Post', {
method: 'POST',
mode: 'no-cors',
headers: {'Content-Type':'application/x-www-form-urlencoded'},
body:  JSON.stringify(records)
      }) .then(() => {
         console.log('new record added');
      }

              )


   }

   return (
             <form actions="" onSubmit= {handleSubmit}>


                                        <h1>Generate new Certificate</h1>



                                        <div className='pagex'>

                                              <label htmlFor="email">Email id</label>
                                                    <input type="text" autoComplete="off"
                                                          value= {userRegistration.email}
                                                                onChange= {handleInput}
                                                                      name="email" id="email" />
                                                                            </div>

                                                                            <div className='pagex'>
                                                                                  <label htmlFor="organizationUnit">Organization Unit</label>
                                                                                        <input type="text" autoComplete="off"
                                                                                              value= {userRegistration.organizationUnit}
                                                                                                    onChange= {handleInput}
                                                                                                          name="organizationUnit" id="organizationUnit" />
                                                                                                                </div>

                                                                                                                <div className='pagex'>
                                                                                                                      <label htmlFor="organization">Organization</label>
                                                                                                                            <input type="text" autoComplete="off"
                                                                                                                                  value= {userRegistration.organization}
                                                                                                                                        onChange= {handleInput}
                                                                                                                                              name="organization" id="organization" />
                                                                                                                                                    </div>

                                                                                                                                                    <div className='pagex'>
                                                                                                                                                          <label htmlFor="city">City</label>
                                                                                                                                                                <input type="text" autoComplete="off"
                                                                                                                                                                      value= {userRegistration.city}
                                                                                                                                                                            onChange= {handleInput}
                                                                                                                                                                                  name="city" id="city" />
                                                                                                                                                                                        </div>

                                                                                                                                                                                        <div className='pagex'>
                                                                                                                                                                                              <label htmlFor="state">State</label>
                                                                                                                                                                                                    <input type="text" autoComplete="off"
                                                                                                                                                                                                          value= {userRegistration.state}
                                                                                                                                                                                                                onChange= {handleInput}
                                                                                                                                                                                                                      name="state" id="state" />
                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                            <div className='pagex'>
                                                                                                                                                                                                                                  <label htmlFor="country">Country</label>
                                                                                                                                                                                                                                        <input type="text" autoComplete="off"
                                                                                                                                                                                                                                              value= {userRegistration.country}
                                                                                                                                                                                                                                                    onChange= {handleInput}
                                                                                                                                                                                                                                                          name="country" id="country" />
                                                                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                                                                <div className='pagex'>
                                                                                                                                                                                                                                                                      <button type="submit">Registration</button>
                                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                                            </form>
          )
}

export default GenerateNewCertificate;
