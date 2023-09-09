import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBpLtNz9HiuaO3ioYXi625smc-41gIXLg8",
  authDomain: "stay-spot-801bd.firebaseapp.com",
  projectId: "stay-spot-801bd",
  storageBucket: "stay-spot-801bd.appspot.com",
  messagingSenderId: "237959974716",
  appId: "1:237959974716:web:b5e0349e0a8ae96aac1839",
  measurementId: "G-KTBYRZWPQY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () =>{
    signInWithPopup(auth,provider)
    .then((result)=>{
       const name = result.user.displayName;
       const email = result.user.email;
       const profilePic = result.user.photoURL;

       localStorage.setItem("name", name)
       localStorage.setItem("email", email)
       localStorage.setItem("profilePic", profilePic)
    }).catch((error)=>{
       console.log(error);
    });
};