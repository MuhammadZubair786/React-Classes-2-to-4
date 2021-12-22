const addUser = (data)=>{
    console.log(data)
    return (dispatch)=>{
        dispatch({
            type: "Add_USER",
            data : data
            
        })
    }
}

export default addUser