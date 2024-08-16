import MyComp from "./components/MyComp";
import {Post} from "./components/Post";

import "./App.css"

function App(){
  return (<div>
    <h1 className="heading">React course by Death Code</h1>
    <MyComp/>
    <Post title="React Course" desc="This React Course is Free for everyone"/>
    <Post title="C Programming" desc="This C Language Course is Free for everyone"/>
  </div>)
}
export default App;