import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../Context/useAuth';
import './ManageOrders.css';

const ManageOrders = () => {
  const {manageUser, setManageUser, user} = useAuth();
  const handleDeleteUser = id =>{
      const proceed = window.confirm('Are you sure you want to delete this user?');
      if(proceed)
      {
          const url = `https://grisly-labyrinth-59650.herokuapp.com/managers/${id}`;
          fetch(url, {
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data =>{
              if(data.deletedCount > 0)
              {
                  alert("Successfully deleted user");
                  const remainingUser = manageUser.filter(manage => manage._id !== id)
                  setManageUser(remainingUser);
                }
                if(manageUser.length > 1)
                {
                    console.log(user);
                    const myOrders = manageUser.filter(order => order.email === user.email);
                    setManageUser(myOrders);
                }
          })
      }
  }
              
                
    return (
        <div className="manage-orders">
            {/* <h1>Manage User length: {manageUser.length}</h1> */}
            <div>
                <h1>Your name: {user.displayName}</h1>
                <h2>Your Orders below</h2>
                   <div className="orders-card">
                   {
                      manageUser.map(service=>  <Card className="single-card" style={{ width: '18rem', height: "30rem" }}>
                        <Card.Img variant="top" src={service.image} />
                       <Card.Body>
                        <Card.Title className="card-title">{service.name1}</Card.Title>
                        <Card.Title className="card-title">Price: ${service.price}</Card.Title>
                        <Card.Text className="card-text">
                         {service.description}
                        </Card.Text>
                        
                      </Card.Body>
                     
                      <Card.Body className="card-body">
                      {/* <input style={{width: '80px'}} type="text" value={service.status} />
                      <br />
                        <button className="card-button">Update Status</button> */}
                        <button onClick={()=>handleDeleteUser(service._id)} className="card-button">Delete</button>
                        
                      </Card.Body>
                    </Card> )
                    }
                   </div>
            </div>
        </div>
    );
};

export default ManageOrders;