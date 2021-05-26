//setting state for reducer access on initial render
const INITIAL_STATE = {
    currentUser: null,
}
//we are then creating a reducer to handle the `SET_CURRENT_USER` 
//action.type , if the action type matches then we will take in the
//action and return the payload in the new object to be given to the store
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload,
            }

        default:
            return state
    }
}

export default userReducer