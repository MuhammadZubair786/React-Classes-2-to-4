import * as firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCVDDmSzLPIvukOSZxGNei8KTNZjtf3T_o",
    authDomain: "react-host-daa87.firebaseapp.com",
    projectId: "react-host-daa87",
    storageBucket: "react-host-daa87.appspot.com",
    messagingSenderId: "517472135236",
    appId: "1:517472135236:web:7222046d56ede4c1e5f411"
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database()

 
  export {database, firebase as default }