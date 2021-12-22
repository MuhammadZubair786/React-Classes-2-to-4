import {useState} from 'react'
function App(){
  let [name,setname] = useState()
  let [data,setdata] = useState("zubair")
  // let [count] = useState(0)
  // let [arr] = useState(["1","2","3"])
  let [obj,setobj] = useState(
    [
      
]
)

var deletedata = (index)=>{
 obj.splice(index,1)

 SpeechSynthesisUtterance(obj[ins])

 setobj([...obj])

}

// console.log(name)


  var getonobj=()=>{
  
    setobj([...obj,
      {
      name : name,
      class : "14"
    }])
    setdata("Fiazan")
  }

  return(
    <div>
      {/* <h1>hello</h1>
      <h2>{data}</h2> */}

      <input type="text" value={name||''} onChange={(e)=>{setname(e.target.value)}}/>
      <button onClick={()=>getonobj()}>set data</button>
      {
     obj.map((v,i)=>{
       return(

         <div key={i}>
         <h1>{v.name}</h1>
         <h2>{v.class}</h2>
         <button onClick={()=>deletedata(i)}>Delete</button>
         </div>
       )
     })
      }
    
    
      </div>
  )
}

export default App