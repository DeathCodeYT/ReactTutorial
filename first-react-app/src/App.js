import MyComp from "./MyComp";
import {Post} from "./Post";

function App(){
  return (<div>
    <h1>React course by Death Code</h1>
    <MyComp/>
    <Post title="React Course" desc="This React Course is Free for everyone"/>
    <Post title="C Programming" desc="This C Language Course is Free for everyone"/>
  </div>)
}
export default App;