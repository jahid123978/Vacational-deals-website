import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Context/useAuth';

const Private_Route = ({children, ...rest}) => {
    const {user, isLogin} = useAuth();
    if(isLogin) {
        return 'loading...';
    }
    return (
       <Route
       {...rest}
       render = {({location})=> user.displayName? children : 
       <Redirect
       to = {{
           pathname: '/login',
           state: {from: location}
       }}
       
       ></Redirect>
    }
       
       
       >

       </Route>
    );
};

export default Private_Route;