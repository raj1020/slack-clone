import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';


var firebaseConfig = {
    apiKey: "AIzaSyB4NTOCU4ZinOFdryqKcpnbXJLmbkOPfd8",
    authDomain: "slack-clone-bd34f.firebaseapp.com",
    databaseURL: "https://slack-clone-bd34f.firebaseio.com",
    projectId: "slack-clone-bd34f",
    storageBucket: "slack-clone-bd34f.appspot.com",
    messagingSenderId: "617628911338",
    appId: "1:617628911338:web:499f5eaca64d435e647993",
    measurementId: "G-T2RHVSDBNH"
  };


  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;

