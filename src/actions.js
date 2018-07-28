import { apiCall } from './api/api'
import {
  CHANGE_SEARCHFIELD,
  REQUEST_AVATARS_PENDING,
  REQUEST_AVATARS_SUCCESS,
  REQUEST_AVATARS_FAILED
 } from './constants'


export const setSearchField = (text) => ({ type: CHANGE_SEARCHFIELD, payload: text })

export const requestavatars = () => (dispatch) => {
  dispatch({ type: REQUEST_AVATARS_PENDING })
  apiCall('https://jsonplaceholder.typicode.com/users')
    .then(data => dispatch({ type: REQUEST_AVATARS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_AVATARS_FAILED, payload: error }))
}