import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  requestApi: null,
  result: ['message'],
  requestFail: ['message']
})

export const getApiType = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  loading: false,
  success: false,
  message: ''
})

export const request = (state) =>
  state.merge({loading: true, success: false})

// successful avatar lookup
export const success = (state, action) => {
  const {message} = action
  return state.merge({loading: false, success: true, message})
}

// failed to get the avatar
export const failure = (state, action) => {
  const {message} = action
  return state.merge({loading: false, success: true, message})
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [getApiType.REQUEST_API]: request,
  [getApiType.RESULT]: success,
  [getApiType.REQUEST_FAIL]: failure
})
