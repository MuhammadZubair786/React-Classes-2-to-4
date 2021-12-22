import React from "react";
import {useParams} from 'react-router-dom'

function Userdata(){
    let fname = useParams()
    console.log(fname)
    return(
        <>
        <h1>user|_data {fname.fname}</h1>
        </>
    )

}


export default Userdata;