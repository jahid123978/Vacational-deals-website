import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializationAuthentication = () =>{
     return initializeApp(firebaseConfig);
}

export default initializationAuthentication;