import {put, takeLatest} from 'redux-saga/effects'
import {clearCart} from 'action'
import {actionTypes} from 'action-types'

function* clearCartStart() {
  yield put(clearCart())
}

export function* cartSagas() {
  yield takeLatest(actionTypes.SIGN_OUT_SUCCESS, clearCartStart)
}
