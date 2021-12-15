import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { forumListReducer, forumReviewCreateReducer, forumUpdateReducer, forumDetailsReducer, forumCreateReducer } from './reducers/forumReducers'
import { userLoginReducer, userDetailsReducer, userRegisterReducer } from './reducers/usersReducers'

const reducer = combineReducers({
    forumCreate: forumCreateReducer,
    forumsList: forumListReducer,
    forumReviewCreate: forumReviewCreateReducer,
    forumUpdate: forumUpdateReducer,

    forumDetails: forumDetailsReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
})


const userInfoFromStorage = localStorage.getItem("userInfo") ?
    JSON.parse(localStorage.getItem("userInfo")) :
    null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
};


const middleware = [thunk];


const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;