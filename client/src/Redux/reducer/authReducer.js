
     const authReducer = (state = {userActive:''}, action) => {
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem("user", JSON.stringify( action.payload));
            return state.userActive = action.payload

        default:
            return state;

    }
}

export default authReducer;