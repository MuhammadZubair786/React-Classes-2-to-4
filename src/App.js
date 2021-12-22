import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import  Inc from './Store/Action/inc'
import Child from './child';
import User_Render from './User_Render';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <h1>{props.count}</h1>
      <Child/>

      <User_Render/>
     
    
     
    </div>
  );
}



const mapStateToProps=(state)=>({
  count : state.count,
  user : state.user

})

export default connect(mapStateToProps,null)(App);
