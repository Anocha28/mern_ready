import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {
    pageListReducer
} from './Reducers/PageReducers'

const reducer = combineReducers({
    pageList: pageListReducer,   

})

//const userInfoFromStorage = localStorage.getItem('userInfo') ? 
                            //JSON.parse(localStorage.getItem('userInfo')) : null

                            

const initialState = {
    //userLogin: {userInfo: userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools
    (applyMiddleware(...middleware)))



export default store