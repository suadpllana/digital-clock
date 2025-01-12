import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [clock, setClock] = useState('');
  const [data , setData] = useState("")

  useEffect(() => {
    function updateClock() {
        const date = new Date();
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
      setClock(`${hours}:${minutes}:${seconds}`);

  
    };
    const months = ["Januray","February" , "March" , "April", "May","June","July","August","September" , "October" , "November", "December"]
    function getDate(){
        const date = new Date();
        const day = date.getDate().toString().padStart(2,"0")
        const monthIndex = (date.getMonth())
    
        const year = date.getFullYear()
 
        setData(`${day}-${months[monthIndex]}-${year}`)
    }
    getDate()

    updateClock(); 
    const intervalId = setInterval(updateClock, 1000); 

  }, []);

  return (
    <div className="container">
      <h1>Digital Clock</h1>
      <h2>{clock}</h2>
      <h2>{data}</h2>
    </div>
  );
};

export default Clock;
