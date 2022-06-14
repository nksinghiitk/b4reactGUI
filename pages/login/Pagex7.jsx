import React, {useState,useEffect} from 'react'

import FormInput from './FormInput';
import './forminput.scss'
import './pagex7.scss'

const Pagex7 = () => {
   //const history = useHistory();

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



      ////   const response1 = await fetch(
      //   `https://gorest.co.in/public/v2/users`
      // );



      // console.log(response1);
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

   useEffect(() => {
      async function getData() {
         const response1 = await fetch(
                              `https://gorest.co.in/public/v2/users`
                           )
                           let actualData = await response1.json();

         console.log(actualData);
      }
      getData()
   }, [])




   return (
             <form actions="" onSubmit= {handleSubmit}>
                                        <div className='pagex7'>

                                              <FormInput placeholder="username"/>

                                                    <h1>Please enter email id</h1>
                                                    <label>Please enter Email ID</label>
                                                    <span>                     </span>

                                                    <label htmlFor="email">Email Id</label>
                                                          <input type="text" autocomplete="off"
                                                                value= {userRegistration.password}
                                                                      onChange= {handleInput}
                                                                            name="email" id="email" />
                                                                                  </div>
                                                                                  <button type='submit'>OK</button>
                                                                                        <span>                      </span>



                                                                                        </form>
          )
}

export default Pagex7
