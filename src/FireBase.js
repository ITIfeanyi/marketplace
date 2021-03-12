import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBM5H3E7BPA_vTIQAVmbY3dB4zhqlxhmdM",
  authDomain: "market-place-a1ca9.firebaseapp.com",
  projectId: "market-place-a1ca9",
  storageBucket: "market-place-a1ca9.appspot.com",
  messagingSenderId: "576675321542",
  appId: "1:576675321542:web:d6756069bee1867f65e9c7",
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
