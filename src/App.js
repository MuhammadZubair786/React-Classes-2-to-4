import React from 'react'
import Firebase  from './Config/firebase'

import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todo: [ ],
      value: '',


    }
  }

  componentDidMount(){
    Firebase.database().ref('/Todo_App').once('value',(data)=>{
      var todo_item = data.val()
     
      var values = Object.values(todo_item)
      console.log(values)

      this.setState({
        todo : values
      })

    })

  }

  edit(id) {
    this.state.todo[id].status = true

    console.log(this.state.todo)
   this.setState({
     todo : this.state.todo
   })
  }

  handle_change(e,id){
    console.log(e.target.value)
    this.state.todo[id].name = e.target.value
    this.setState({
      todo : this.state.todo
    })
    console.log(this.state.todo)


  }

  update(id,key){
    console.log(key)

    let obj = {
      name :  this.state.todo[id].name,
      status : false,
      key : key

    }
    console.log(obj)

    Firebase.database().ref(`/Todo_App/${key}`).set(obj)

    

    this.state.todo[id].status= false
    this.setState({
      todo : this.state.todo
    })
  }

  delete(id){
    this.state.todo.splice(id,1)
    this.setState({
      todo : this.state.todo
    })
    
  }

 

  set_data() {
    var key = Firebase.database().ref('/Todo_App').push().getKey()
    var obj = {
      name :  this.state.value,
      status : false,
      key : key

    }

    Firebase.database().ref('/Todo_App').child(key).set(obj)
    this.setState({
      todo: [...this.state.todo,obj],
      value : ''
    })

  }

  render() {
    var data = this.state

    return (
      <div>


        <b>Enter Todo</b>
       
        <input type="text" value={data.value} onChange={(e) => this.setState({ value: e.target.value })} style={{ width: '200px', marginTop: '10px', height: '20px', marginLeft: '10px' }} />
        <button onClick={() => this.set_data()}>Add Todos</button>
        <ul>
          {data.todo.map((v, i) => {
            return (

              <li key={i} >
                {v.status ? <input value={v.name} onChange={(e)=>this.handle_change(e,i)}/> : <b> {v.name}</b>}

                {v.status ?
                  <button style={{ marginLeft: "20px" }} onClick={() => this.update(i,v.key)}>Update</button>
                  :
                  <>
                    <button style={{ marginLeft: "20px" }} onClick={() => this.edit(i)}>Edit</button>
                    <button style={{ marginLeft: "20px" }} onClick={()=>this.delete(i)}>Delete</button>
                  </>
                }



              </li>

            )
          })}
        </ul>

      </div>
    )
  }
}
export default App;
