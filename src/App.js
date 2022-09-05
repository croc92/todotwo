import React from 'react'
import { useState, useEffect, useCallback } from 'react';
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
  const [tasks, setTasks] = useState([])

  // !! BACKEND user
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

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
  // error message for unsuccessfull logIn
  const [errorMsg, setErrorMsg] = useState('')

  // !!!BACKEND LOGIN!!!
  const callLoginAPI = (username, password) => {
    // session'a atacagimiz body'i hazirliyoruz.
    const requestBody = {
      username: username,
      password: password
    }
    // networke request atacaksak fetch() method kullaniriz
    fetch("http://localhost:1234/session", {
      method: "POST",
      headers: {
        'Content-Type' : "application/json",
      },
      // body objectini json stringe cevirmek lazim ki fetch calissin
      body: JSON.stringify(requestBody)
    }).then(response => {
      if(!response.ok) {
        console.log('login failed')
      } else {
        navList();
        response.json().then(body => {
          localStorage.setItem('token-key', body.jwt);
          callGetToDoListAPI(body.jwt)
        })
      
      }

    })

  }
  
  // GET LIST
  const callGetToDoListAPI = (jwt) => {
    fetch('http://localhost:1234/todo', {
            headers: {
              "Content-Type" : "application/json",
              "Authorization" : "bearer " + `${jwt}`,
            }
          }).then(response => {
            response.json().then(body => {
              setTasks(body.data)

            })
          })
  }

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

    const getTokenKey = localStorage.getItem('token-key')

    fetch(`http://localhost:1234/todo/${idParam}`, {
      method: "DELETE",
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : "bearer " + `${getTokenKey}`,
      },
    }).then(()=> setTasks(tasks.filter(task => task.id !== idParam)))
    
  }

  // toggle reminder (waiting for allef PUT)
  const toggleReminder = (idParam) => {
    setTasks(tasks.map(task => task.id === idParam ? {...task, reminder: !task.reminder} : task))
  }

  // add task({title: 'task', dueDatetime:'2022-09-04T14:14:14.000Z', reminder: boolean})
  const addTask = (taskParameters) => {

    const getTokenKey = localStorage.getItem('token-key')

    fetch('http://localhost:1234/todo', {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : "bearer " + `${getTokenKey}`,
      },
      body: JSON.stringify(taskParameters)
    }).then(response => {
      response.json().then(responseBody => setTasks([...tasks, responseBody.data]))
    })

  }

  return (
    <div className='container'>

      <div className='logInOut'> 
      <h1>To Do Two App</h1>
      {location.pathname === '/list' && <FaPowerOff style={{fontSize: '1.5rem', color: 'red', cursor: 'pointer'}} onClick={logUserOut}/>}
      </div>

      <Routes>  
        <Route path='/list' element={
          // ----- anonym comp yerine todopage gibi bir comp olsun -------
          <>
          <Header isShowing={showAddTask} showAddTask={() => setshowAddTask(!showAddTask)} />
          {showAddTask && <AddTask onAdd={addTask} />}
          {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'no tasks to show'}
          </>
          } 
        />

        <Route path='' element={<SignIn username={username} password={password} onSetUsername={setUsername} onSetPassword={setPassword} onLogUser={callLoginAPI} errorMsg={errorMsg} />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>

    </div>
  )
}

export default App