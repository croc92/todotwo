
import React from 'react'
import { useState } from 'react';
import { FaPowerOff } from 'react-icons/fa';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';



const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Task A",
      day: 'Sat',
      reminder: true
    },
    {
      id: 2,
      text: "Task B",
      day: 'Sun',
      reminder: true},
    {
      id: 3,
      text: "Task C",
      day: 'Wed',
      reminder: false},
  ])
  const [showAddTask, setshowAddTask] = useState(false)

  // delete Task
  const deleteTask = (idParam) => {
    setTasks(tasks.filter(task => task.id !== idParam))
  }

  // toggle reminder
  const toggleReminder = (idParam) => {
    setTasks(tasks.map(task => task.id === idParam ? {...task, reminder: !task.reminder} : task))
  }

  // add task
  const addTask = (taskParameters) => {
    const randomID = Math.floor(Math.random()*10000) + 3
    const newTask = {randomID ,...taskParameters}
    setTasks([...tasks, newTask])
  }

  return (
    <div className='container'>

      <div className='logInOut'> 
      <h1>To Do Two App</h1>
      <Link to=''><FaPowerOff style={{fontSize: '1.5rem', color: 'red'}}/></Link>
      </div>

      {/* after routes */}
      <Routes>
        <Route path='/list' element={
        <>
        <Header isShowing={showAddTask} showAddTask={() => setshowAddTask(!showAddTask)} />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'no tasks to show'}
        </>
      } />

        <Route path='/' element={<Login />}>
          <Route path='/SignIn' element={<SignIn />}/>
          <Route path='/SignUp' element={<SignUp />}/>
        </Route>

      </Routes>

      {/* before routes */}
      {/* <Header isShowing={showAddTask} showAddTask={() => setshowAddTask(!showAddTask)} /> */}
      {/* {showAddTask && <AddTask onAdd={addTask} />} */}
      {/* {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'no tasks to show'} */}

    </div>
  )
}

export default App
