import {actionTypes} from 'action-types'

function setCurrentUser(user) {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: user,
  }
}

function toggleCartDropDown() {
  return {
    type: actionTypes.TOGGLE_CART_DROP_DOWN,
  }
}

function addCartItem(item) {
  return {
    type: actionTypes.ADD_CART_ITEM,
    payload: item,
  }
}

function subtractCartItem(item) {
  return {
    type: actionTypes.SUBTRACT_CART_ITEM,
    payload: item,
  }
}

function removeCartItem(item) {
  return {
    type: actionTypes.REMOVE_CART_ITEM,
    payload: item,
  }
}

function fetchShopDataSuccess(collections) {
  return {
    type: actionTypes.FETCH_SHOP_DATA_SUCCESS,
    payload: collections,
  }
}

function fetchShopDataStart() {
  return {
    type: actionTypes.FETCH_SHOP_DATA_START,
  }
}

function fetchShopDataError(error) {
  return {
    type: actionTypes.FETCH_SHOP_DATA_ERROR,
    payload: error,
  }
}

function signInGoogleStart() {
  return {
    type: actionTypes.SIGNIN_GOOGLE_START,
  }
}

function signInEmailAndPasswordStart(payload) {
  return {
    type: actionTypes.SIGNIN_EMAIL_AND_PASSWORD_START,
    payload,
  }
}

function signInSuccess(user) {
  return {
    type: actionTypes.SIGNIN_SUCCESS,
    payload: user,
  }
}

function signInError(error) {
  return {
    type: actionTypes.SIGNIN_FAILURE,
    payload: error,
  }
}

function checkSessionUser() {
  return {
    type: actionTypes.CHECK_SESSION_USER,
  }
}

function signoutStart() {
  return {
    type: actionTypes.SIGN_OUT_START,
  }
}

function signoutSuccess() {
  return {
    type: actionTypes.SIGN_OUT_SUCCESS,
  }
}

function signoutFailure() {
  return {
    type: actionTypes.SIGN_OUT_FAILURE,
  }
}

function signupStart(payload) {
  return {
    type: actionTypes.SIGN_UP_START,
    payload,
  }
}

function signupSuccess(payload) {
  return {
    type: actionTypes.SIGN_UP_SUCCESS,
    payload,
  }
}

function signupFailure() {
  return {
    type: actionTypes.SIGN_UP_FAILURE,
  }
}

function clearCart() {
  return {
    type: actionTypes.CLEAR_CART,
  }
}

export {
  setCurrentUser,
  toggleCartDropDown,
  addCartItem,
  subtractCartItem,
  removeCartItem,
  fetchShopDataSuccess,
  fetchShopDataStart,
  fetchShopDataError,
  signInGoogleStart,
  signInEmailAndPasswordStart,
  signInSuccess,
  signInError,
  checkSessionUser,
  signoutStart,
  signoutSuccess,
  signoutFailure,
  clearCart,
  signupStart,
  signupSuccess,
  signupFailure,
}
