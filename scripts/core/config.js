import firebase from 'firebase/compat/';

const firebaseConfig = {
    apiKey: "AIzaSyANqQ6iZyHPwm0sb4Je7K45zZCex-4GbzA",
    authDomain: "rapid-survival-f3587.firebaseapp.com",
    projectId: "rapid-survival-f3587",
    storageBucket: "rapid-survival-f3587.appspot.com",
    messagingSenderId: "132339908137",
    appId: "1:132339908137:web:9e77317c6a6435e4662638"
};

firebase.initializeApp(firebaseConfig);


export default firebase.firestore();
