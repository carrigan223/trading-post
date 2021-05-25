import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

//firebase config object
const config = {
    apiKey: 'AIzaSyApCYj9T4I_p29H9nG7s9se5XluH_bXzgM',
    authDomain: 'trading-post-store.firebaseapp.com',
    projectId: 'trading-post-store',
    storageBucket: 'trading-post-store.appspot.com',
    messagingSenderId: '543237511361',
    appId: '1:543237511361:web:f48a489d105ab7fb935c40',
    measurementId: 'G-0LQCSN9WHR',
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    //the user we are querying for
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    //snapshot of user document which will contain the exist prop
    const snapShot = await userRef.get()

    //checking firebase for existence of a user
    //if user doesnt exist creating an instance of that user
    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            //using the .set() to create the user document in firebase
            //users collection
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            })
        } catch (error) {
            console.log('Error creating user', error.message)
        }
    }
    //return userRef for later use
    return userRef
}

//initializing App with config object
firebase.initializeApp(config)

//exporting auth and firs=estore for outside use
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
