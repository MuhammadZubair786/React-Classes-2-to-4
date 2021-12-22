import React,{useContext} from "react"
import {GlobalContext} from './Store/GlobalState'
function Child(){

    const {count,addUser,decUser} =useContext(GlobalContext)

    console.log(count)

    return(
        <>
        <h1>Child</h1>
        <h1>{count}</h1>
        <button onClick={()=>addUser("bye")}>Add </button>
        <button onClick={()=>decUser("c")}>Dec </button>
        
        </>
    )
}

export default Child