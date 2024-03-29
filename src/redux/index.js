import { applyMiddleware, createStore } from 'redux'
import reducer from './reducers/counter-reducer'
import thunk from 'redux-thunk'

export const store = createStore(reducer, applyMiddleware(thunk))
export * from './action-types'
export * from './action-creators'
