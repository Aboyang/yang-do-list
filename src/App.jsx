import { useState } from 'react'
import Tasks from './Tasks.jsx'
import Add from './Add.jsx'
import './App.css'

function App() {

  const [tasks, setTasks] = useState([])

  return (
    <div className='notepad'>
    <Tasks tasks={tasks} setTasks={setTasks} />
    <Add tasks={tasks} setTasks={setTasks} />

    </div>
  )

}

export default App
