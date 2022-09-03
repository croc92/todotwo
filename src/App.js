import React from 'react'
import { useState } from 'react';
import { FaPowerOff } from 'react-icons/fa';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
// import Login from './Login';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';


const App = () => {
  // Tasks Array
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Task A",
      dueDate: "2023-10-25",
      dueTime: "16:00",
      reminder: true
    },
    {
      id: 2,
      text: "Task B",
      dueDate: "2022-12-15",
      dueTime: "16:00",
      reminder: true},
    {
      id: 3,
      text: "Task C",
      dueDate: "2023-11-30",
      dueTime: "15:00",
      reminder: false},
  ])
  // User Array
  const [users, setUsers] = useState([{
    name: 'admin',
    email: 'admin@admin.com',
    password: 'admin',
  },
  {
    name: 'test',
    email: 'test@test.com',
    password: 'test',
  }
  ])
  // any user
  const [user, setUser] = useState({ email: "", password: "" });
  // Admin-user
  const userAdmin = {
    email: 'admin@admin.com',
    password: '1234',
  }
  // useNavigate
  const navigate = useNavigate();
  const navHome = () => {
    navigate('')
  }
  const navList = () => {
    navigate('list')
  }

  // don't show logout button if the login page is being showed
  const location = useLocation();


  // is user loggin in?
  // const [isLogged, setIsLogged] = useState(false);
  // unsuccessfull logIn
  const [errorMsg, setErrorMsg] = useState('')

  // log in - store to Local
  const logUserIn = (e) => {
    e.preventDefault()

    if (userAdmin.email == user.email && userAdmin.password == user.password) {
      console.log("signed in as:", user);
      // setIsLogged(true);
      // store in localStorage
      localStorage.setItem("user-key", JSON.stringify(user));
      setUser({email: "", password: ""})
      setErrorMsg('')
      // navigate to List Page
      navList();
    } else {
      console.log("details don't match");
      setUser({email: "", password: ""})
      setErrorMsg('user details don\'t match')
    }
  };

  // log out - remove from Local Storage - send to Home Page
  const logUserOut = () => {

    console.log('logged out');
    // setIsLogged(false);
    localStorage.removeItem('user-key');
    // remove the whole thing from localStorage:
    // localStorage.clear();

    // remove err messaege
    setErrorMsg('');
    // navigate to home page
    navHome();

  }

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
    const id = Math.floor(Math.random()*10000) + 3
    const newTask = {id, ...taskParameters}
    setTasks([...tasks, newTask])
  }

  // add user
  const addUser = (userParameters) => {
    console.log('signed up.');
    setUsers([...users, userParameters])
  }

  return (
    <div className='container'>

      <div className='logInOut'> 
      <h1>To Do Two App</h1>
      {location.pathname === '/list' && <FaPowerOff style={{fontSize: '1.5rem', color: 'red', cursor: 'pointer'}} onClick={logUserOut}/>}
      {/* <Link to=''><FaPowerOff style={{fontSize: '1.5rem', color: 'red'}}/></Link> */}
      </div>

      {/* after routes */}
      <Routes>

        
        {/* need to protect LIST route */}
        <Route path='/list' element={
          <>
          <Header isShowing={showAddTask} showAddTask={() => setshowAddTask(!showAddTask)} />
          {showAddTask && <AddTask onAdd={addTask} />}
          {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'no tasks to show'}
          </>
          } 
        />

        <Route path='' element={<SignIn user={user} onSetUser={setUser} onLogUser={logUserIn} errorMsg={errorMsg} />} />
        <Route path='signup' element={<SignUp onAddUser={addUser} />} />

        {/* <Route path='/' element={<Login  />}>
          <Route path='/SignIn' element={<SignIn />}/>
          <Route path='/SignUp' element={<SignUp onAddUser={addUser}/>}/>
        </Route> */}

      </Routes>

      {/* before routes */}
      {/* <Header isShowing={showAddTask} showAddTask={() => setshowAddTask(!showAddTask)} /> */}
      {/* {showAddTask && <AddTask onAdd={addTask} />} */}
      {/* {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'no tasks to show'} */}

    </div>
  )
}

export default App


