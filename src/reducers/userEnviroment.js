import { FIRST_MEET } from '../actions/ActionType'

var initialState = { isFirstMeet: true, text: "" }

export default (state = initialState, action) => {
    let {type, payload} = action
    switch (action.type) {
    case FIRST_MEET:
      return {
          ...state,
          isFirstMeet: payload
    }
    default:
      return state
    }
}
