
import { PAGE_MANAGEMENT } from './ActionType'

export const setCurrentPage = (pageIndex) => async dispatch => {
    await dispatch({
        type: PAGE_MANAGEMENT,
        payload: pageIndex
    })
}
