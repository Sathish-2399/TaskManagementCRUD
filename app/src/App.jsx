import { useState } from 'react'
import './App.css'

function App() {
  const [Task,setTasks] = useState([]);
  const [complete,setComplete] = useState([]);
   function handleAddTask() {
    const newTask = prompt("Enter a new task:");
    if (newTask) {
      setTasks([...Task, newTask]);
    }
  } 

  function handleDeleteTask(index) {
    const newTasks = [...Task];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }
  
  function handleUpdateTask(index) {      
    const newTask = prompt("Update the task", Task[index]);
    if (newTask) {
      const newTasks = [...Task];
      newTasks[index] = newTask;
      setTasks(newTasks);
    }
  } 

  function handlecompltetask(event) {
    
    const completedTask = event.target.parentNode.firstChild.textContent;
    setComplete([...complete, completedTask]);
    const index = Task.indexOf(completedTask);  

    const newTasks = [...Task];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    if (event.target.tagName === 'LI') {
      event.target.style.textDecoration = event.target.style.textDecoration === 'line-through' ? 'none' : 'line-through';
    }
  } 
  return (
    <>
      <h3>Task Management System</h3>
      <button onClick={handleAddTask}>Add Task</button>  

      <ul>
        {Task.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleUpdateTask(index)}>Update</button>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
            <button onClick={handlecompltetask}>Complete</button>
          </li>
        ))}
      </ul>

      <ul>
        <h3>complete tasks</h3> 
        {complete.map((complete, index) => (
          <li key={index}>
            {complete[index]}
          </li> 
        ))}  
      </ul>   

    </>
  )
}

export default App
