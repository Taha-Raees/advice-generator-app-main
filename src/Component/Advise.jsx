import React, { useState } from "react";
import './Advise.scss'

function Advice() {

  const [advice, setAdvice] = useState("");
  const [id, setId] = useState(0);

  function fetchAdvice() {
    fetch(`https://api.adviceslip.com/advice`)
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip.advice);
        setId(data.slip.id);
      })
      .catch((error) => console.error(error));
  }

  return (
   <div className="advise">
    <div className="container">
      
      <h3>ADVICE #{id}</h3>
      <p>"{advice}"</p>
      
      <img src={require('./pattern-divider-desktop.svg').default} alt="" />
      <br />
      <div className="icon"><img src={require('./icon-dice.svg').default} onClick={fetchAdvice} alt="" /></div>
      </div>
   </div>
  );
}

export default Advice;
