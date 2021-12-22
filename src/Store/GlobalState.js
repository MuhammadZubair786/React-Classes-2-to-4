import { createContext, useReducer } from "react"
import Reducer from "./Reducer"

const inital_State = {
    count : 20
}

//create Context
export const GlobalContext = createContext(inital_State)

// Provider
export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(Reducer,inital_State)

    function addUser(data) {
        console.log("fun run",data)
        dispatch({
            type: "ADD",
            
        })
    }

    function decUser(data) {
        console.log("fun run",data)
        dispatch({
            type: "DEC",
            
        })
    }

    return(
        <GlobalContext.Provider
        value={{
            count : state.count,
            addUser,
            decUser
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}