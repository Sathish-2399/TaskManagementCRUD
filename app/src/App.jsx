import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Task,setTasks] = useState([])

  return (
    <>

    //CRUD operation to do task Management System
      <h1>Task Management System and click the button to complete it</h1>
      <input
        type="text"
        placeholder="Add a new task"
        value={Task}
        onChange={(e) => setTasks(e.target.value)}

      ></input>

      <button onClick={() => setTasks([...Task, Task])}>Add Task</button>



      <ul>
        <h1>Tasks print in array when complete it delete the Task update the task in array</h1>
        {Task.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => {
              const newTasks = [...Task];
              newTasks.splice(index, 1);
              setTasks(newTasks);
            }}>Delete</button>
            <button onClick={() => {
              const newTask = prompt("Update the task", task);
              if (newTask) {
                const newTasks = [...Task];
                newTasks[index] = newTask;
                setTasks(newTasks);
              }
            }}>Update</button>
          </li>
        ))}
      </ul>

    </>
  )
}

export default App
