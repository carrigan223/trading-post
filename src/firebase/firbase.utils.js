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

//initializing App with config object
firebase.initializeApp(config)

//exporting auth and firs=estore for outside use
export const auth = firebase.auth()
export const firestore = firebase.firestore()


const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
