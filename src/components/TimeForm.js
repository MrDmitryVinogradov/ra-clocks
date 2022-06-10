import { React } from 'react'

function TimeForm({handleSubmit, handleZoneChange, handleNameChange, form}) {

  return (
    <form className='time-form' onSubmit={handleSubmit}>
      <label htmlFor='name'> Название </label>
      <input name='name' className='form-input' value={form.zonename} onChange={handleNameChange}></input>
      <label htmlFor='timezone'> Часовой пояс </label>
      <input name='timezone' type='number' className='form-input' value={form.timezone} onChange={handleZoneChange} ></input>
      <button className='add-btn'> Добавить </button>
    </form>
  )
}

export default TimeForm
