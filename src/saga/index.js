import {all} from 'redux-saga/effects'
import {shopSagas} from 'saga/shop.sagas'
import {authSagas} from 'saga/auth.sagas'
import {cartSagas} from 'saga/cart.sagas'

export function* rootSaga() {
  yield all([shopSagas(), authSagas(), cartSagas()])
}
