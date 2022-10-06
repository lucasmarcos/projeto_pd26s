import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const app = initializeApp({
  apiKey: "AIzaSyAxd7thAZ3lT6qJaWSL0EcFnyamR1m0Giw",
  authDomain: "pd26s-ad736.firebaseapp.com",
  projectId: "pd26s-ad736",
  storageBucket: "pd26s-ad736.appspot.com",
  messagingSenderId: "667563279286",
  appId: "1:667563279286:web:b3ad8fb1fd6159fb433717",
});

export const auth = getAuth(app);
export const database = getDatabase(app);
