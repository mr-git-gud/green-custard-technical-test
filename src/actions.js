import {
  REQUEST_POSTS_PENDING,
  REQUEST_POSTS_SUCCESS,
  REQUEST_POSTS_FAILED,
  SET_SEARCHED_USER,
  REQUEST_USERS_PENDING,
  REQUEST_USERS_SUCCESS,
  REQUEST_USERS_FAILED,
  SET_USER_ID
} from './constants';

export const setSearchedUser = text => ({
  type: SET_SEARCHED_USER,
  payload: text
})

export const requestPosts = userId => (dispatch) => {
  dispatch({type: REQUEST_POSTS_PENDING})
  fetch(`https://jsonplaceholder.typicode.com/posts${userId ? '?userId=' + userId + '' : ''}`)
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_POSTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_POSTS_FAILED, payload: error }))
}

export const requestUsers = () => (dispatch) => {
  dispatch({type: REQUEST_USERS_PENDING})
  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_USERS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_USERS_FAILED, payload: error }))
}

export const setUserId = text => ({
  type: SET_USER_ID,
  payload: text
})
