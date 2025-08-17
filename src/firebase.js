import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBSJNoHd97xXXfqwevC6qzBxioRgiQakDE",
  authDomain: "netflix-clone-ed439.firebaseapp.com",
  projectId: "netflix-clone-ed439",
  storageBucket: "netflix-clone-ed439.firebasestorage.app",
  messagingSenderId: "1078316275630",
  appId: "1:1078316275630:web:89d5fa7ebbd201f365da3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code);
    }
}

const login = async (email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error)
        toast.error(error.code);
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signUp, logout};