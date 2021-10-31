import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css';
import { useHistory } from 'react-router';

const Services = ({service}) => {
      const history = useHistory();
      const handleServices = () =>{
       
        history.push(`/place/${service._id}`);
        console.log(service._id);
        fetch('https://grisly-labyrinth-59650.herokuapp.com/orders', {
          method: 'POST',
          headers : {
            'content-type': 'application/json'
          },
          body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data =>{
          // if(data.insertedId){
          //   alert('Successfully Added Your Orders');
          // }
        })
      }

    return (
    <Card className="single-card" style={{ width: '18rem', height: "27rem" }}>
  <Card.Img variant="top" src={service.image} />
  <Card.Body>
    <Card.Title className="card-title">{service.name}</Card.Title>
    <Card.Title className="card-title">Price: ${service.price}</Card.Title>
    <Card.Text className="card-text">
     {service.description}
    </Card.Text>
  </Card.Body>
 
  <Card.Body className="card-body">
    
    
    <button onClick={handleServices} className="card-button">Book Now</button>
    
  </Card.Body>
</Card>
    );
};

export default Services;