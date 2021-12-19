
import { initializeApp, getApps } from 'firebase/app';
import {getFirestore,collection,addDoc,onSnapshot,serverTimestamp,query,orderBy,} from 'firebase/firestore'
import {getAuth,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile,signOut,} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBPe2bYiQr8iETnJH3GG5m_yDU2TL9ePAI",
  authDomain: "gifted-chat-24504.firebaseapp.com",
  projectId: "gifted-chat-24504",
  storageBucket: "gifted-chat-24504.appspot.com",
  messagingSenderId: "43538451218",
  appId: "1:43538451218:web:4f3ef0537bb600d5dd41cb"
};

if (!getApps().length) initializeApp(firebaseConfig)

export {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  collection,
  addDoc,
  getFirestore,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
}