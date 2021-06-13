import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBSIQLH7GSECOMkvcrvzrTT8KvsEy8r9IU",
    authDomain: "simulador-k.firebaseapp.com",
    projectId: "simulador-k",
    storageBucket: "simulador-k.appspot.com",
    messagingSenderId: "240273328582",
    appId: "1:240273328582:web:369cb0cac4f29754248ac7"
  };
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;