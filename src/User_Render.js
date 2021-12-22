import React,{useState} from "react";
import {connect} from 'react-redux'
import {addUser,DeleteUser} from "./Store/Action/delete_User";
// import DeleteUser from "./Store/Action/delete_User";

function User_Render(props){
    console.log(props)
    let [name,setname] = useState()
    let [email,setemail] = useState()

    const submit =()=>{
        console.log(email,name)
        var obj = {
            name :name,
            email :email
        }
        props.addUser(obj)
    }

   
    return(
        <>
        <input type='text' value={name} onChange={(e)=>{setname(e.target.value)}}/>
        <input type='text' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
        <button onClick={()=>submit()}>add User </button>
        <br/>
      
        <hr/>
        {props.user.map((v,i)=>{
            return(
                <div key={i}>
                <h1>User Name : {v.name}</h1>
                <h1>User Email : {v.email}</h1>
                <button onClick={()=>props.DeleteUser(i)}>Delete</button>
                <hr/>
                </div>
            )
        })}
        </>
    )
}

const mapDispatchToProps = (dispatch) =>({
    addUser : (data)=>{dispatch(addUser(data))},
    DeleteUser : (data)=>{dispatch(DeleteUser(data))}
    
  })

const mapStateToProps=(state)=>({
    user : state.user
  })
  
  export default connect(mapStateToProps,mapDispatchToProps )(User_Render);

