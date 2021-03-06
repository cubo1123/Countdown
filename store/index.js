import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { TimeReducer } from './timeReducer'

export const Store = createStore(TimeReducer, {}, composeWithDevTools(applyMiddleware(thunkMiddleware)))
