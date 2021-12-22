const DeleteUser = (data)=>{
    console.log(data)
    return (dispatch)=>{
        dispatch({
            type: "Delete_USER",
           key : data
            
        })
    }
}

const addUser = (data)=>{
    console.log(data)
    return (dispatch)=>{
        dispatch({
            type: "Add_USER",
            data : data
            
        })
    }
}

export { DeleteUser,addUser}