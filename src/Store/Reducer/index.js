const inital_State = {
    count: 0,
    user: [
        {
        email: "mzh",
        name: "jdjfb"
    }
]
}

export default (state = inital_State, action) => {
    console.log(action.type)

    switch (action.type) {
        case "Inc":
            return {
                ...state,
                count: state.count + 1
            }
        case "Add_USER" :
            return {
                ...state,
               user : [...state.user,action.data]
            }
        case "Delete_USER":
            return{
                ...state,
                user :  state.user.filter((item, index) => index !== action.key)
            }
        

    }


    return state
}

