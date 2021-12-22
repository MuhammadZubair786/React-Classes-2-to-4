const mystate = {
    count: 0,
    name: "asad"
}

export default (state = mystate, action) => {
    console.log("Action ", action)
    switch (action.type) {
        case "SETDATA":
            return ({
                ...state,
                count: action.data +3
            })
      
        default:
            return state
    }
    return state
}