import {actionTypes} from 'action-types'

const initialState = {
  collections: {},
  isLoading: false,
  error: null,
}

function shopReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_SHOP_DATA_START:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.FETCH_SHOP_DATA_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isLoading: false,
      }
    case actionTypes.FETCH_SHOP_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export {shopReducer}
