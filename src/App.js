
import './App.css';
import { connect } from 'react-redux'
import Inc from './Store/Action/increment'


function App(props) {
  console.log("DATA FROM STATE :", props)
  return (
    <div className="App">
      <h1>jjdjdj</h1>
      <b>{props.count}</b>

      <button onClick={()=>props.Inc2(props.count)}>click</button>

    </div>
  );
}


const mapStateToProps = (state) => ({
  name: state.name,
  count: state.count
})


const mapDispatchToProps = (dispatch) => ({
  Inc2 : (data) => dispatch(Inc(data)),

  
})


export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;