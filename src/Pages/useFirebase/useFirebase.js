import initializationAuthentication from "../../Firebase/Firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializationAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState([]);
    const [services, setServices] = useState([]);
    const [isLogin, setIsLogin] = useState(true);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const handleGoogleLogin = () =>{
        // setIsLogin(true)
        return signInWithPopup(auth, provider)
    
        
        // .then(result =>{
        //     const user = result.user;
        //     setUser(user);
        // })
        // .catch(error =>{
        //     console.log(error.message);
        // })
    }
    const LogOut= () => {
        // setIsLogin(true);
        signOut(auth)
        .then(()=>{
            setUser([]);
        })
        .finally(()=>{setIsLogin(false)})
    }

    useEffect(() =>{
        onAuthStateChanged(auth, user=>{
             if(user)
              {
                 setUser(user);
              }
              else{
                setUser({});
              }
              setIsLogin(false);
           })
       }, [])
    
  useEffect(()=>{
        fetch('https://grisly-labyrinth-59650.herokuapp.com/services')
        .then(res => res.json())
        .then(data =>{
            setServices(data);
        })
        .finally(()=>setIsLogin(false))
  },[])

  const [orders, setOrders] = useState([])
  useEffect(()=>{
    fetch('https://grisly-labyrinth-59650.herokuapp.com/orders')
    .then(res => res.json())
    .then(data =>{
         setOrders(data);
    })
    .finally(()=>setIsLogin(false));
  },[])

  const [manageUser, setManageUser] = useState([]);
  useEffect(()=>{
      fetch('https://grisly-labyrinth-59650.herokuapp.com/managers')
      .then(res => res.json())
      .then(data =>{
          setManageUser(data);
      })
  }, []);


    return {
        manageUser,
        orders,
        services,
        user,
        isLogin,
        setManageUser,
        setIsLogin,
        setOrders,
        LogOut,
        handleGoogleLogin
    }

}


export default useFirebase;