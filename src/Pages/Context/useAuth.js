import { useContext } from "react";
import { authProvider } from "./AuthProvider";


const useAuth = () =>{
  return useContext(authProvider);
}

export default useAuth;