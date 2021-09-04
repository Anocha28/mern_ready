import {
    PAGE_LIST_REQUEST,
    PAGE_LIST_SUCCESS,
    PAGE_LIST_FAIL,
    PAGE_LIST_RESET
} from '../Constants/PageConstants'


export const pageListReducer = (state = {pages: []}, action) => {
    switch(action.type){
        case PAGE_LIST_REQUEST:
            return {loading: true}
        case PAGE_LIST_SUCCESS:
            return {loading: false, pages: action.payload}
        case PAGE_LIST_FAIL:
            return {loading: false, error: action.payload}
        case PAGE_LIST_RESET:
            return {}
        default: return state
    }
}