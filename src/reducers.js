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

const initialStateSearch = {
  searchedUser: '',
}

export const searchUser = (state=initialStateSearch, action={}) => {
  switch (action.type) {
    case SET_SEARCHED_USER:
      return Object.assign({}, state, {searchedUser: action.payload})
    default:
      return state
  }
}

const initialStatePosts = {
  isPending: false,
  posts: [],
  error: ''
}

export const requestPosts = (state=initialStatePosts, action={}) => {
  switch (action.type) {
    case REQUEST_POSTS_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_POSTS_SUCCESS:
      return Object.assign({}, state, {posts: action.payload, isPending: false})
    case REQUEST_POSTS_FAILED:
      return Object.assign({}, state, {error: action.payload})
    default:
      return state
  }
}

const initialStateUsers = {
  users: [],
  isPendingUsers: false,
  errorUsers: ''
}

export const requestUsers = (state=initialStateUsers, action={}) => {
  switch (action.type) {
    case REQUEST_USERS_PENDING:
      return Object.assign({}, state, {isPendingUsers: true})
    case REQUEST_USERS_SUCCESS:
      return Object.assign({}, state, {users: action.payload, isPendingUsers: false})
    case REQUEST_USERS_FAILED:
      return Object.assign({}, state, {errorUsers: action.payload})
    default:
      return state;
  }
}

const initialStateUserID = {
  userID: ''
}

export const setUserID = (state=initialStateUserID, action={}) => {
  switch (action.type) {
    case SET_USER_ID:
      return Object.assign({}, state, {userID: action.payload})
    default:
      return state;
  }
}
