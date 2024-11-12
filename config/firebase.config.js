
import { initializeApp, getApp,getApps } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCq2P6BJEPSGwxGrraLw8Ab5oGCvayB1Ow",
  authDomain: "homezone-703ef.firebaseapp.com",
  projectId: "homezone-703ef",
  storageBucket: "homezone-703ef.firebasestorage.app",
  messagingSenderId: "589640966641",
  appId: "1:589640966641:web:2341e7d1ec5d00bc942450",
  measurementId: "G-3134MEG7BS"
};
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);
const firestoreDB = getFirestore(app);
const firebaseStorage = getStorage(app);

export {app, firebaseAuth, firestoreDB, firebaseStorage};