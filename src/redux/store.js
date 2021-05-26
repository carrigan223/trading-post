//we are initializing our instance of the redux store(global state)
//

import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'

//bringing in rootReducer from local file
import rootReducer from './root-reducer'

//setting `middlewares` to an array containing middleware
const middlewares = [logger]

//initializing store with root reducer and middleware
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store
