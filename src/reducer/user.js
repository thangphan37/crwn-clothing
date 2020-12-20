import {actionTypes} from 'action-types'

const initialState = {
  user: null,
  error: null,
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      }
    case actionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        user: null,
        error: null,
      }
    case actionTypes.SIGNIN_FAILURE:
    case actionTypes.SIGN_OUT_FAILURE:
    case actionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export {userReducer}
