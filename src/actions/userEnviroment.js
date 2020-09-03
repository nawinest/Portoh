
import { FIRST_MEET } from './ActionType'

export const disableFirstMeetMessage = () => async dispatch => {
    await dispatch({
        type: FIRST_MEET,
        payload: false
    })
}
