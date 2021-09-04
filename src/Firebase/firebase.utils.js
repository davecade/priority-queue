import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyBabUJURrrcNDSGH-0kczNvWfOdXDNiYa8",
    authDomain: "ticket-logger-db.firebaseapp.com",
    projectId: "ticket-logger-db",
    storageBucket: "ticket-logger-db.appspot.com",
    messagingSenderId: "228337886381",
    appId: "1:228337886381:web:8dc324c3f35aa606b29224",
    measurementId: "G-Q6BX2W3P81"
};

firebase.initializeApp(config)

export const convertCollecionsSnapShotToMap = collections => {
    return collections.docs.map(doc => {
        return {
            ...doc.data()
        }
    })
}

export const firestore = firebase.firestore();