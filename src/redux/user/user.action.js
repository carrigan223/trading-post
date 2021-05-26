import { UserActionTypes } from './user.types'

//the action to be exported to be handled by our reducer
//it is a pure function taking in a user and returning that user
//as the payload. Make sure type matches the reducer action.type
//call as these are our connecting points
export const setCurrentUser = (user) => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user,
})
