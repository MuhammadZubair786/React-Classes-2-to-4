import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import  Inc from './Store/Action/inc'

function Child(props) {
  console.log(props)
  return (
    <div className="App">
     
      <button onClick={()=>{props.Inc()}}>Inc</button>
     
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>({
  Inc : ()=>{dispatch(Inc())}
})



export default connect(null,mapDispatchToProps)(Child);
