import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

const AliasName = () => {

   const navigate = useNavigate();

   const [userRegistration, setUserRegistration] = useState({
aliasname: "",

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
                                       <h1>Please enter new alias name</h1>

                                       <label htmlFor="aliasname">Alias name</label>
                                             <input type="text" autocomplete="off"
                                                   value= {userRegistration.aliasname}
                                                         onChange= {handleInput}
                                                               name="aliasname" id="aliasname" />
                                                                     </div>

                                                                     <button onClick = {()=> navigate("./Page7.js")} type='submit' >OK</button>
                                                                           <span>                      </span>
                                                                           <button>CANCEL</button>

                                                                           </form>

          )
}

export default AliasName
