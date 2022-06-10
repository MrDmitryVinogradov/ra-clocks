import React, { useEffect, useState } from 'react'

function Clock({ timezone, zonename, handleRemove, id}) {

  const date = new Date();
  const [hours, setHours] = useState(date.getUTCHours());
  const [minutes, setMinutes] = useState(date.getMinutes());
  const [seconds, setSeconds] = useState(date.getSeconds());

  
  useEffect(() => {
    console.log('mount')
    let intervalID = setInterval(() => {
      let newDate = new Date();
      let newSeconds = newDate.getSeconds();
      newSeconds = newSeconds < 10 ? '0' + newSeconds : newSeconds;
      let newMinutes = newDate.getMinutes();
      newMinutes = newMinutes < 10 ? '0' + newMinutes : newMinutes;
      let newHours = newDate.getUTCHours();
      newHours = newHours < 10 ? '0' + newHours : newHours;
      setSeconds(newSeconds);
      setMinutes(newMinutes);
      setHours(newHours);
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);
  
  return (
    <div className='clock' id={id}>
      <div className='remover' onClick={handleRemove}></div>
      <div className = 'clock-name'> {zonename} </div>
      {hours + timezone} : {minutes} : {seconds}
    </div>
  )
}

export default Clock
