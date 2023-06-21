import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBKknUBXL8vG4cIcZ2VKk1nShviApHQTLI",
    authDomain: "chatapp-7d401.firebaseapp.com",
    projectId: "chatapp-7d401",
    storageBucket: "chatapp-7d401.appspot.com",
    messagingSenderId: "105911216448",
    appId: "1:105911216448:web:6f07795a145c38fce8b2a5",
    measurementId: "G-FYEZSQVNZX"
  };
  
  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);