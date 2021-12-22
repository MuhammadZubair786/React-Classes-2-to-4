import React, { useState } from "react";

function App() {
  let [user, set2] = useState('zubair')
  let [count, setcount] = useState(0)

  var setdata = () => {
    setcount(++count)
  }

  return (

    <>
      {user}
      <h1>Hello</h1>
      {count}
      <button onClick={() => { set2('bilal') }}>Click me</button>
      <button onClick={() => setdata()}>Click me</button>
    </>
  )
}

export default App;