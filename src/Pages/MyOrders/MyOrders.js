import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../Context/useAuth';
import Orders from '../Orders/Orders';
import './MyOrders.css';

const MyOrders = () => {
    const {orders, isLogin} = useAuth();
    console.log(orders);
    // console.log(orders._id);
    if(isLogin) {
        return (<Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>)
    }
  
    return (
        <div className="card-container my-orders">
             {
               orders.map((order) => <Orders
               key = {order._id}
               order = {order}
               >

               </Orders>)
           }

          
        </div>
    );
};

export default MyOrders;