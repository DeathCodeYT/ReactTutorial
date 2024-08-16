
import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import Testing from './components/Practice/Testing';
import TaskContextProvider from './context/taskContext';
import { Outlet } from 'react-router-dom';

function App() {
  useEffect(()=>{
    document.title = "Task Manager"
  },[])
  return (
    <>
      <TaskContextProvider>
        <Navbar />
        <Outlet></Outlet>
      </TaskContextProvider>
      {/* <Testing/> */}
    </>
  )
}

export default App;
