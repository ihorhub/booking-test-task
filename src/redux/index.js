import {createStore} from 'react'
import reducer from './reducers/counter-reducer'

 export const store = createStore(reducer)