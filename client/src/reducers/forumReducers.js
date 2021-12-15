import {
    FORUM_LIST_REQUEST,
    FORUM_LIST_SUCCESS,
    FORUM_LIST_FAIL,
    FORUM_DETAILS_REQUEST,
    FORUM_DETAILS_SUCCESS,
    FORUM_DETAILS_FAIL,
    FORUM_CREATE_REQUEST,
    FORUM_CREATE_SUCCESS,
    FORUM_CREATE_FAIL,
    FORUM_CREATE_RESET,
    FORUM_UPDATE_REQUEST,
    FORUM_UPDATE_SUCCESS,
    FORUM_UPDATE_FAIL,
    FORUM_UPDATE_RESET,
    FORUM_CREATE_REVIEW_REQUEST,
    FORUM_CREATE_REVIEW_SUCCESS,
    FORUM_CREATE_REVIEW_FAIL,
    FORUM_CREATE_REVIEW_RESET
} from "../constants/forumConstants";

export const forumCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case FORUM_CREATE_REQUEST:
            return {...state, loading: true }
        case FORUM_CREATE_SUCCESS:
            return {
                success: true,
                loading: false,
                forum: action.payload,
            }
        case FORUM_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case FORUM_CREATE_RESET:
            return {}
        default:
            return state
    }
}




export const forumListReducer = (state = { forums: [] }, action) => {
    switch (action.type) {
        case FORUM_LIST_REQUEST:
            return { loading: true, forums: [] }
        case FORUM_LIST_SUCCESS:
            return {
                loading: false,
                forums: action.payload,
            }
        case FORUM_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }

}

export const forumDetailsReducer = (state = { forum: { reviews: [] } }, action) => {
    switch (action.type) {
        case FORUM_DETAILS_REQUEST:
            return {...state, loading: true }
        case FORUM_DETAILS_SUCCESS:
            return {
                loading: false,
                forum: action.payload,
            }
        case FORUM_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const forumUpdateReducer = (state = { forum: {} }, action) => {
    switch (action.type) {
        case FORUM_UPDATE_REQUEST:
            return { loading: true }
        case FORUM_UPDATE_SUCCESS:
            return { loading: false, success: true, forum: action.payload }
        case FORUM_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        case FORUM_UPDATE_RESET:
            return { forum: {} }
        default:
            return state
    }
}



export const forumReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case FORUM_CREATE_REVIEW_REQUEST:
            return { loading: true }
        case FORUM_CREATE_REVIEW_SUCCESS:
            return { loading: false, success: true }
        case FORUM_CREATE_REVIEW_FAIL:
            return { loading: false, error: action.payload }
        case FORUM_CREATE_REVIEW_RESET:
            return {}
        default:
            return state
    }
}