import React from 'react'

class App extends React.Component{
  constructor(props){
    super(props)

    console.log(props)
   
  }

 
  render(){
    return(
      <div>
      <h1> dhgvhvdhv </h1>
      <b>dhgdf</b>
      <i>{this.props.data2}</i>
      
      </div>
    )
  }
}
export default App;
