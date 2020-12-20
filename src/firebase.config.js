import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAQ2H9iCDzSqK3jY7-L99aSKrxwTdTfX14',
  authDomain: 'crwn-clothing-app-c6844.firebaseapp.com',
  projectId: 'crwn-clothing-app-c6844',
  storageBucket: 'crwn-clothing-app-c6844.appspot.com',
  messagingSenderId: '851926238812',
  appId: '1:851926238812:web:82992d7b704604d1244899',
  measurementId: 'G-QNE54NE6B9',
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const firestore = firebase.firestore()

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe()
      resolve(userAuth)
    }, reject)
  })
}

const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({
  prompt: 'select_account',
})

export {auth, firestore, googleProvider, getCurrentUser}
