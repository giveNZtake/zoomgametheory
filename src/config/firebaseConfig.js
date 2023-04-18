import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC-AErakHhL7BVR5GaMbq8Iw8_PCoSimZ4",
  authDomain: "groundsmvp.firebaseapp.com",
  projectId: "groundsmvp",
  storageBucket: "groundsmvp.appspot.com",
  messagingSenderId: "794431683484",
  appId: "1:794431683484:web:173274500c6e7715ee2659",
};

const app = initializeApp(firebaseConfig);

export default app;