import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Context/useAuth';
import { useEffect, useState } from "react";
import './Orders.css';

const Orders = ({order}) => {
    const {setOrders, orders, user} = useAuth();
    console.log(orders)
   const handleDeleteUser = id =>{
     const proceed = window.confirm("Are you sure, you want to delete?");
      if(proceed)
      {
        const url = `https://grisly-labyrinth-59650.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
          if(data.deletedCount > 0)
           {
             alert("Deleted successfully");
            const remainingOrders = orders.filter(or => or._id !== id)
            setOrders(remainingOrders);
           }
 
        })
      }
   }
  //  const handleNameChange = e =>{

  //  }
  //  const handleUpdateUser = id =>{
  //     const url = `http://localhost:2000/orders/${id}`;
  //     fetch(url, {
  //       method: 'PUT',
  //       headers: {
  //         'content-type': 'application/json'
  //       },
  //       body: JSON.stringify()
  //     })
  //  }
    const [state, setState] = useState(false);

    const handleState =() =>{
      if(!state)
      {
        setState(true);
      }
     
    }
    
    return (
        <Card className="single-card" style={{ width: '20rem', height: "35rem" }}>
  <Card.Img variant="top" src={order.image} />
  <Card.Body>
    <Card.Title className="card-title">User Name: {user.displayName}</Card.Title>
    <Card.Title className="card-title">Email address: {user.email}</Card.Title>
    <Card.Text className="card-title">{order.name}</Card.Text>
    <Card.Title className="card-title">Price: ${order.price}</Card.Title>
    <Card.Text className="card-text">
     {order.description}
    </Card.Text>
  </Card.Body>
 
  <Card.Body className="card-body">
      {/* <input style={{width: "80px", marginBottom: '4px'}} type="text" value={order.status || 'pending...'} />
      <br />
    <Link className="card-button" to={`/update/${order._id}`}>Update status</Link> */}
    {
      state? <Link style={{textDecoration: 'none', border: '1px solid gray', padding: '2px 4px'}}>approved..</Link> : <Link style={{textDecoration: 'none', border: '1px solid gray', padding: '2px 4px'}}>pending</Link>
    }
    <br />
    <button onClick={()=>handleState()} className="card-button">Update State</button>
    <button onClick={()=>handleDeleteUser(order._id)} className="card-button">Delete</button>
    
  </Card.Body>
</Card>
    );
};

export default Orders;