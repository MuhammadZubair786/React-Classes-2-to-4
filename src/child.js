import './App.css';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    
    }
    console.log("Constructor")
  }


  // shouldComponentUpdate(){
  //  return false
  // }

 static getDerivedStateFromProps(props,state){
    console.log("State ",props,state)
    return null
  }



  render() {
    
    return (
      <div>

      
        <h1>sgdsf</h1>
        </div>
       
    )
  }

}

export default App;
