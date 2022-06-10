import TimeForm from './components/TimeForm'
import Clock from './components/Clock'
import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import './App.css';

function App() {
  const [form, setForm] = useState({
    timezone: 3,
    zonename: 'Moscow'
  });

  const [clocks, setClocks] = useState([]);

  function changeZone(evt) {
    setForm(prevForm => ({ ...prevForm, timezone: evt.target.value }))
  }
  function changeName(evt) {
    setForm(prevForm => ({...prevForm, zonename: evt.target.value }))
  }

  const addClock = (evt) => {
    evt.preventDefault();
    const id = nanoid();
    if (form.timezone && form.zonename) {
      const clock = {
        timezone: Number(form.timezone),
        zonename: form.zonename,
        id: id
      };

      console.log((...clocks) => [...clocks, clock]);
    
      setClocks(prev => [...prev, clock] );
      console.log(clocks);
      setForm({ timezone: '', zonename: '' });
    }
  } 

  const removeClock = (evt) => {
    const id = evt.target.closest('.clock').id;
    setClocks(clocks => clocks.filter(el => el.id !== id))
  }
  
  return (
    <div className="App">
      <TimeForm handleSubmit={addClock} handleNameChange={changeName} handleZoneChange={changeZone} form={form} />
      <div className='clocks-container'>
        {clocks.map((el) => <Clock timezone={el.timezone} zonename={el.zonename} key={el.id} handleRemove={removeClock} id={el.id}/>)}
        </div>
    </div>
  );
}

export default App;
