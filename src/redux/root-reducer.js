//this file contains all the reducer components created
//for handling our actions to then update store and rerender
//our global state, we are then passing these reducers to the `combineReducer` method
//from redux and exporting as a master list
import { combineReducers } from 'redux'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'

export default combineReducers({
    user: userReducer,
    cart: cartReducer,
})
