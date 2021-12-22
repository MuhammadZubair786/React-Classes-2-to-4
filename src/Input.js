import { useState} from "react";

function Input(props){
    const [data,dataset] = useState()
    const [data2,setdata2] = useState()
    console.log(props)

    var smit=()=>{
      props.fun(data)

    }

   
// controlled,uncontrolled =>useref



    return(
        <div>
        <>
        {props.place == 'Enter Name' ? 
        <input placeholder={props.place} value={data} onChange={(e)=>{dataset(e.target.value)}}/>
       
        :
        
        <input placeholder={props.place} value={data2} onChange={(e)=>{setdata2(e.target.value)}} /> }
        </>

        <button onClick={()=>{smit()}}>click me</button>

</div>

    )
}

export default Input;