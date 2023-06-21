// const set_data = () => {
//     // console.log("Running...")
//     return(dispatch) => {
//         console.log("dispatch", dispatch)
//         dispatch({type: "SETDATA", user: {name: "nabeel", email: "nabeel@gmail.com"}})
//     }
// }

// export {set_data}

const set_data = () => {
    return {
        type: "SETDATA", 
        user: { 
        name: "nabeel", 
        email: "nabeel@gmail.com"
    }
}
}

export {set_data}