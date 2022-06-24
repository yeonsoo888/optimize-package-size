import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBmUFDIwzprE9SdsUjeXlgK2P_i3gMdEx0",
    authDomain: "optimize-pakcage-size.firebaseapp.com",
    projectId: "optimize-pakcage-size",
    storageBucket: "optimize-pakcage-size.appspot.com",
    messagingSenderId: "378193046871",
    appId: "1:378193046871:web:31555245f9458c37692212"
}

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
} else {
	firebase.app() // 이미 초기화되었다면, 초기화 된 것을 사용함
}
export const auth = firebase.auth();

export const signInGoogle= () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider);
}