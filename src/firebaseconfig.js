
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDEjCRgeVHcL7AxY9XNEM0g1Ab43rv7rYc",
  authDomain: "shoes-react.firebaseapp.com",
  projectId: "shoes-react",
  storageBucket: "shoes-react.appspot.com",
  messagingSenderId: "174887532144",
  appId: "1:174887532144:web:c03cd0d9eb56a3fb9966b5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);