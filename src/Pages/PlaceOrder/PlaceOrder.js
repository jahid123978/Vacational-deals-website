import React, { useEffect, useState } from 'react';
import './PlaceOrder.css';
import { useForm } from "react-hook-form";
import useAuth from '../Context/useAuth';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const PlaceOrder = () => {
    const history = useHistory();
    const [detials, setDetials] = useState([]);
    const {placeId} = useParams();
    const { register, handleSubmit, reset } = useForm();
    const {user, services} = useAuth();
    useEffect(()=>{ 
        const detialsService = services.find(use => use._id == placeId)
        setDetials(detialsService)
    },[services])

const onSubmit = data =>{
     console.log(data);
     console.log(data.name);
    //  history.push(`/manage-orders`)
    const userDetails = {status: 'pending', image: detials.image, name1: detials.name, price: detials.price, description: detials.description, name: data.name, email: data.email, phone: data.phone, address: data.address, city: data.city}; 
    fetch('https://grisly-labyrinth-59650.herokuapp.com/managers', {
      method: 'POST',
      headers : {
        'content-type': 'application/json'
      },
       body : JSON.stringify(userDetails)
    })
    .then(res => res.json())
    .then(data =>{
     
        alert('Successfully inserted details');
        reset();
      

    })
    
    };
    return (
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
            <img style={{width: '600px', height: '300px'}} src={detials.image} alt="" />
            <h1>Name: {detials.name}</h1>
            <h2>Price: ${detials.price}</h2>
            <h3>Description: {detials.description}</h3>
            
        <label className="name">Name</label>
        <br />
      <input style={{padding: '10px', borderRadius: '20px'}} defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })} />
        <br />
     <label className="email">Email</label>
      <br />
      <input style={{padding: '10px', borderRadius: '20px'}} defaultValue={user.email} {...register("email")} />
      <br />
      <label className="phone">Phone Number</label>
      <br />
      <input style={{padding: '10px', borderRadius: '20px'}} placeholder="Phone Number" type="number" {...register("number", )} />
       <br />
       <label className="city" htmlFor="">City</label>
       <br />
      <input style={{padding: '10px', borderRadius: '20px'}} placeholder="City" {...register("city")} />
      <br />
      <label className="address" htmlFor="">Address</label>
      <br />
      <input style={{padding: '10px', borderRadius: '20px'}} placeholder="address" {...register("address")} />
        <br />
      <input style={{padding: '10px'}} className="placeOrder" type="submit" value="PlaceOrder"/>
    </form>
    );
};

export default PlaceOrder;