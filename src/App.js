import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from './Components/home'
import  About from './Components/about'
import {useState} from 'react'
import Input from "./Input";

function App() {

  let [count,setcount] = useState()

  var place;

 var  getdata=(data)=>{
    console.log("dhdh",data)
    setcount(data)
    
  }
  return (
    <div className="App">
      <Input place= {"Enter Name"} fun = {getdata}/>
      {count}
      {/* <Input place= {"Enter Email"}/>
      <Input place= {"Enter Password"}/> */}
      <button>click</button>
    
      {/* <Router>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
      </Router>
    */}
      

    
    
    </div>
  );
}

export default App;
