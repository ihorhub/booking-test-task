import { DEC_COUNTER, INC_COUNTER } from '../action-types'

const initialState = { counter: 0 }

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case INC_COUNTER: {
      return { ...state, counter: state.counter + 2 }
    }
    case DEC_COUNTER: {
      return { ...state, counter: state.counter - 2 }
    }

    default: {
      return state
    }
  }
}
export default reducer
