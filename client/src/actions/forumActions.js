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
    FORUM_UPDATE_REQUEST,
    FORUM_UPDATE_SUCCESS,
    FORUM_UPDATE_FAIL,
    FORUM_CREATE_REVIEW_REQUEST,
    FORUM_CREATE_REVIEW_SUCCESS,
    FORUM_CREATE_REVIEW_FAIL,
} from "../constants/forumConstants";

import axios from 'axios'


export const createForum = () => async(dispatch, getState) => {
    try {
        dispatch({
            type: FORUM_CREATE_REQUEST,
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(`/api/forums`, {}, config)

        dispatch({
            type: FORUM_CREATE_SUCCESS,
            payload: data,

        })


    } catch (error) {
        dispatch({
            type: FORUM_CREATE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })

    }
}


export const listForums = () => async(dispatch) => {
    try {
        dispatch({ type: FORUM_LIST_REQUEST })

        const { data } = await axios.get("/api/forums/all")


        dispatch({
            type: FORUM_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: FORUM_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })

    }

}



export const listDetailsForum = (forum) => async(dispatch) => {
    try {
        dispatch({ type: FORUM_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/forums/${forum.id}`)

        dispatch({
            type: FORUM_DETAILS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: FORUM_DETAILS_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }
}

export const updateForum = (forum) => async(dispatch, getState) => {
    try {
        dispatch({
            type: FORUM_UPDATE_REQUEST,
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        console.log("sajdbjhgsjfhf", forum)

        const { data } = await axios.put(`/api/forums/edit/${forum._id.id}`, forum, config)

        dispatch({
            type: FORUM_UPDATE_SUCCESS,
            payload: data,

        })


    } catch (error) {
        dispatch({
            type: FORUM_UPDATE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })

    }
}


export const createForumComment = (forum, review) => async(dispatch, getState) => {
    try {
        dispatch({
            type: FORUM_CREATE_REVIEW_REQUEST,
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        await axios.post(`/api/forums/${forum.id}/comments`, review, config)

        dispatch({
            type: FORUM_CREATE_REVIEW_SUCCESS,


        })


    } catch (error) {
        dispatch({
            type: FORUM_CREATE_REVIEW_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })

    }
}