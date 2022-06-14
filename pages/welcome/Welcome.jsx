import React from 'react';

import "./welcome.scss";

const Welcome = (prop) => {
  return (
    <div>
        <div className="welcome">
            <h1>WELCOME TO BRIHASPATI 4</h1>
            <button onClick={prop.status}>
               Continue
            </button>
        </div>
    </div>
  )
}

export default Welcome
