import axios from 'axios'
import {
    PAGE_LIST_SUCCESS,
    PAGE_LIST_REQUEST,
    PAGE_LIST_FAIL,
} from '../Constants/PageConstants'

export const listPage = () => async(dispatch, getState) => {
    try {
        dispatch({
            type: PAGE_LIST_REQUEST
        })  
        //const {userLogin: {userInfo}} = getState()
        const config = {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMzFjMDI4MmM5ZWFiYjVjYmI0OGY5MCIsImlhdCI6MTYzMDY4MDQ5MCwiZXhwIjoxNjMwNzY2ODkwfQ.DJyc9amYS5_bEc_IQ6JU1shU0nqQJJ68_TM4qhqnXgE`
                //Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.get(`/api/page`, config)
        dispatch({
            type: PAGE_LIST_SUCCESS, 
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PAGE_LIST_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,})
    }
}