import {firestore} from 'firebase.config'

async function createUserProfile(userAuth, optionData) {
  if (!userAuth) return

  const {displayName, email} = userAuth
  const userRef = firestore.collection('users').doc(userAuth.uid)
  const {exists, id} = await userRef.get()
  const createdAt = new Date()

  if (!exists) {
    try {
      await userRef.set({
        id,
        displayName,
        email,
        createdAt,
        ...optionData,
      })
    } catch (error) {
      throw new Error(`unhandled creating user profile with ${error.message}`)
    }
  }

  return userRef
}

async function getShopData() {
  try {
    const collections = {}
    const collectionsRef = firestore.collection('collections')
    const snapshots = await collectionsRef.get()

    snapshots.forEach((snapshot) => {
      const data = snapshot.data()
      collections[data.title.toLowerCase()] = data
    })

    return collections
  } catch (error) {
    console.log('error', error)
  }
}

export {createUserProfile, getShopData}
