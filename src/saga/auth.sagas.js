import {all, put, takeLatest} from 'redux-saga/effects'
import {
  signInSuccess,
  signInError,
  signoutSuccess,
  signoutFailure,
  signupSuccess,
  signupFailure,
} from 'action'
import {actionTypes} from 'action-types'
import {googleProvider, auth, getCurrentUser} from 'firebase.config'
import {createUserProfile} from 'utils/api-client'

function* signInUp(user) {
  try {
    const userRef = yield createUserProfile(user)
    const snapshot = yield userRef.get()

    yield put(signInSuccess({id: snapshot.id, ...snapshot.data()}))
  } catch (error) {
    yield put(signInError(error.message))
  }
}

function* signInGoogleStart() {
  try {
    const {user} = yield auth.signInWithPopup(googleProvider)
    yield signInUp(user)
  } catch (error) {
    yield put(signInError(error.message))
  }
}

function* signInWithEmailAndPasswordStart({payload: {email, password}}) {
  try {
    const {user} = yield auth.signInWithEmailAndPassword(email, password)
    yield signInUp(user)
  } catch (error) {
    yield put(signInError(error.message))
  }
}

export function* signInGoogleSagas() {
  yield takeLatest(actionTypes.SIGNIN_GOOGLE_START, signInGoogleStart)
}

export function* signInWithEmailAndPasswordSagas() {
  yield takeLatest(
    actionTypes.SIGNIN_EMAIL_AND_PASSWORD_START,
    signInWithEmailAndPasswordStart,
  )
}

export function* authenticatedUser() {
  try {
    const user = yield getCurrentUser()
    if (!user) return
    yield signInUp(user)
  } catch (error) {
    yield put(signInError(error.message))
  }
}

export function* onCheckSessionUserSagas() {
  yield takeLatest(actionTypes.CHECK_SESSION_USER, authenticatedUser)
}

export function* signoutStart() {
  try {
    yield auth.signOut()
    yield put(signoutSuccess())
  } catch (error) {
    yield put(signoutFailure(error))
  }
}

export function* signoutSagas() {
  yield takeLatest(actionTypes.SIGN_OUT_START, signoutStart)
}

export function* signupStart({payload: {email, password}}) {
  try {
    const {user} = yield auth.createUserWithEmailAndPassword(email, password)
    yield put(signupSuccess({user}))
  } catch (error) {
    yield put(signupFailure())
  }
}

export function* signInAfterSignUpSuccess({payload: {user}}) {
  yield signInUp(user)
}

export function* signupSuccessStart() {
  yield takeLatest(actionTypes.SIGN_UP_SUCCESS, signInAfterSignUpSuccess)
}

export function* signupSagas() {
  yield takeLatest(actionTypes.SIGN_UP_START, signupStart)
}

export function* authSagas() {
  yield all([
    signInGoogleSagas(),
    signInWithEmailAndPasswordSagas(),
    onCheckSessionUserSagas(),
    signoutSagas(),
    signupSagas(),
    signupSuccessStart(),
  ])
}
