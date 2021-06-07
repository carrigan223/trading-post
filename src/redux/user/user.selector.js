import { createSelector } from 'reselect' //importing createSelector from the reselcet library

const selectUser = (state) => state.user //take the needed slice of state

//then passing the slice of state and surrentUSer to the creatSelector method
const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)

export { selectCurrentUser }
