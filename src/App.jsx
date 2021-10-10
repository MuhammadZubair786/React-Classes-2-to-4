import React from 'react'


import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todo: [
        { name: "Zubair", status: false },
        { name: "Bilal", status: false},
        { name: "Umair", status: false }

      ],
      value: '',


    }
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

  update(id){
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
    this.setState({
      todo: [...this.state.todo, this.state.value]
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
                  <button style={{ marginLeft: "20px" }} onClick={() => this.update(i)}>Update</button>
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
