import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Context/useAuth';
import './Header.css';
import { Bars, Nav, NavMenu, NavLink } from './NavbarElements';

const Header = () => {
    const {user, LogOut, isLogin} = useAuth();
    console.log(user);
    return (
         <>
        <Nav>
          <Bars />
    
          <NavMenu>
            <NavLink to='/home' activeStyle>
             Home
            </NavLink>
            {user.displayName && <NavLink to='/my-orders' activeStyle>
              Manage-Orders
            </NavLink>}
           {user.displayName && <NavLink to='/manage-orders' activeStyle>
              My-Orders
            </NavLink>}
             
           {user.displayName && <NavLink to='/add-services' activeStyle>
              Add-Services
            </NavLink>}
            <NavLink to='/about-us' activeStyle>
             About-Us
            </NavLink>
            
          </NavMenu>
         
         <NavMenu to="">
         {user.email && <Link style={{marginRight: '10px', color: 'white', textDecoration: 'none'}} to="">{user.displayName}</Link>}
        {user.email && <img style={{width: "30px", borderRadius: '50%'}} src={user.photoURL} alt="" />}
          {user.displayName? <button style={{backgroundColor: '#63D471', color: 'white', border: 'none'}} onClick={LogOut}>Logout</button> :
          <Link style={{color: 'white', textDecoration: 'none'}} to="/login">Login</Link>}
         </NavMenu>
          
        </Nav>
      </>
    );
};

export default Header;