import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAZFAuzv18gsTUyl2wFw5qC86Ayay_GhzM",
  authDomain: "android-app-a25a6.firebaseapp.com",
  databaseURL:
    "https://android-app-a25a6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "android-app-a25a6",
  storageBucket: "android-app-a25a6.appspot.com",
  messagingSenderId: "536257942624",
  appId: "1:536257942624:web:4897ff22d17c902c365f05",
  measurementId: "G-PY5CBBJWY3",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyAZFAuzv18gsTUyl2wFw5qC86Ayay_GhzM",
//   authDomain: "android-app-a25a6.firebaseapp.com",
//   databaseURL: "https://android-app-a25a6-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "android-app-a25a6",
//   storageBucket: "android-app-a25a6.appspot.com",
//   messagingSenderId: "536257942624",
//   appId: "1:536257942624:web:4897ff22d17c902c365f05",
//   measurementId: "G-PY5CBBJWY3"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
