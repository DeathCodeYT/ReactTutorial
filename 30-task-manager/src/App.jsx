
import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import Testing from './components/Practice/Testing';
import {Provider} from 'react-redux'
import { Outlet } from 'react-router-dom';
import { store } from './store/store';

function Layout() {
  useEffect(()=>{
    document.title = "Task Manager"
  },[])
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Outlet></Outlet>
      </Provider>
      {/* <Testing/> */}
    </>
  )
}

export default Layout;
