import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";


const OtpRecieved = () => {

   const navigate = useNavigate();

   const [userRegistration, setUserRegistration] = useState({
otp_recieved: "",

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


   return ( <form actions="" onSubmit= {handleSubmit}>
                                       <div>

                                       <h1>Please enter otp recieved</h1>

                                       <label htmlFor="otp_recieved">OTP recieved</label>
                                             <input type="text" autocomplete="off"
                                                   value= {userRegistration.password}
                                                         onChange= {handleInput}
                                                               name="otp_recieved" id="otp_recieved" />
                                                                     </div>
                                                                     <button type='submit'>OK</button>
                                                                           <span>                      </span>
                                                                           <button onClick = {()=> navigate("./Page9.js")}>CANCEL</button>


                                                                                 </form>)
}

export default OtpRecieved
