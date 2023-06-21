const INITIAL_STATE = {
    users: [
        {
            name: "Tuba",
            email: "tuba@gmail.com"
        },
        
    ]
}

export default (state = INITIAL_STATE, action) => {
    console.log("action", action)
    switch(action.type)
    {
        case "SETDATA":
            return ({
                ...state,
                users: [...state.users, action.user]
            })
    }
    return state;
}

// export default changeState;
