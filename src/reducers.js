import {
  CHANGE_SEARCHFIELD,
  REQUEST_AVATARS_PENDING,
  REQUEST_AVATARS_SUCCESS,
  REQUEST_AVATARS_FAILED
 } from './constants';

const initialStateSearch = {
  searchField: ''
}

export const searchavatars = (state=initialStateSearch, action={}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, {searchField: action.payload})
    default:
      return state
  }
}

const initialStateAvatars = {
  avatars: [],
  isPending: true
}

export const requestavatars = (state=initialStateAvatars, action={}) => {
  switch (action.type) {
    case REQUEST_AVATARS_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_AVATARS_SUCCESS:
      return Object.assign({}, state, {avatars: action.payload, isPending: false})
    case REQUEST_AVATARS_FAILED:
      return Object.assign({}, state, {error: action.payload})
    default:
      return state
  }
}
