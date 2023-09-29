import { useEffect, useState } from 'react'
import './App.css'
import Form from './Components/Form/Form'
import List from './Components/List/List'
function App() {
  const [tasks, setTasks] = useState([])
  let response =
    tasks.length > 0 ? <List tasks={tasks} /> : <h1>No tasks added!!</h1>

  useEffect(() => {
    if (localStorage.getItem('Todo-List')) {
      setTasks(JSON.parse(localStorage.getItem('Todo-List')))
    }
  }, [])

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('Todo-List', JSON.stringify(tasks))
    }
  }, [tasks])

  function clearList() {
    setTasks([])
  }

  return (
    <>
      <h1> 📝 Todo App</h1>
      <Form onAddTask={setTasks} />
      <div>{response}</div>
      <button onClick={clearList}>Clear</button>
    </>
  )
}

export default App
