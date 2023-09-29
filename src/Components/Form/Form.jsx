import React from 'react'
import { useState } from 'react'
import './Form.css'

const Form = ({ onAddTask }) => {
  const [inputText, setInputText] = useState('')

  function addNewTask(e) {
    e.preventDefault()
    onAddTask((prev) => [...prev, inputText])
    setInputText('')
  }

  return (
    <form onSubmit={addNewTask} method='post'>
      <input className={'form-input'}
        type='text'
        name='task'
        id='task'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <input className={'form-input'} type='submit' value='Add Task' />
    </form>
  )
}

export default Form
