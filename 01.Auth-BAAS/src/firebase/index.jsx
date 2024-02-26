import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxdOQQGmhhEFYjPnUCkwe_l496pQ6g788",

  authDomain: "auth-app-a27c8.firebaseapp.com",

  projectId: "auth-app-a27c8",

  storageBucket: "auth-app-a27c8.appspot.com",

  messagingSenderId: "283144584993",

  appId: "1:283144584993:web:6cbf6a5203c672a6b44860",

  measurementId: "G-WT6GM1WYXJ"

};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
