import { FIRST_MEET, PAGE_MANAGEMENT } from '../actions/ActionType'

var initialState = { pageIndex: 1}

export default (state = initialState, action) => {
    let {type, payload} = action
    switch (action.type) {
    case PAGE_MANAGEMENT:
      return {
          ...state,
          pageIndex: payload
    }
    default:
      return state
    }
}
