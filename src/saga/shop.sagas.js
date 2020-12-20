import {put, takeLatest} from 'redux-saga/effects'
import {fetchShopDataSuccess, fetchShopDataError} from 'action'
import {actionTypes} from 'action-types'
import {getShopData} from 'utils/api-client'

function* fetchCollectionsStart() {
  try {
    const collections = yield getShopData()
    yield put(fetchShopDataSuccess(collections))
  } catch (error) {
    yield put(fetchShopDataError(error))
  }
}

export function* shopSagas() {
  yield takeLatest(actionTypes.FETCH_SHOP_DATA_START, fetchCollectionsStart)
}
