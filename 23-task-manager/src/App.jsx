
import './App.css';
import Navbar from './components/Navbar';
// import Testing from './components/Practice/Testing';
import TaskManager from './components/TaskManage';
import TaskContextProvider from './context/taskContext';

function App() {
  return (
    <>
      <TaskContextProvider>
        <Navbar />
        <TaskManager />
      </TaskContextProvider>
      {/* <Testing/> */}
    </>
  )
}

export default App;
