import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import About from "./Components/about";
import Home from "./Components/home";
import User from "./Components/user";
import UserData from './Components/user_data'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/user' exact component={User} />
        <Route path='/user/:fname' component={UserData}></Route>
        {/* <Route path='/user/:fname/:lname' component={UserData}></Route> */}
        <Route path="*" exact component={()=>{return(<h1>404 </h1>)}}/>
     
        </Switch>
      </Router>

    </div>
  );
}

export default App;
