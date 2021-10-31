import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        const newService = {image: data.image, name: data.name, price: data.price, description: data.description};
        fetch('https://grisly-labyrinth-59650.herokuapp.com/services', {
            method: 'POST',
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(newService)
        })
        .then(res => res.json())
        .then(data => {
            
                alert('Successfully added new service');
                reset();
            
        })
    }
    return (
        <form className="form-container service-container" onSubmit={handleSubmit(onSubmit)}>
            {/* <img style={{width: '600px', height: '300px'}} src={detials.image} alt="" /> */}
            <h1>Added service</h1>
            <label className="imgeUrl" htmlFor="">Image URl</label>
            <br />
         <input style={{padding: '10px', borderRadius: '20px'}} placeholder="image url"  {...register("image", { required: true, })} />  
          <br />  
        <label className="Service name">Service Name</label>
        <br />
      <input style={{padding: '10px', borderRadius: '20px'}}  {...register("name", { required: true, maxLength: 20 })} />
        <br />
      <label className="Price">Price</label>
      <br />
      <input style={{padding: '10px', borderRadius: '20px'}} placeholder="Price" type="number" {...register("price", )} />
       <br />
       <label className="Description city" htmlFor="">Description</label>
       <br />
      <input style={{padding: '10px', borderRadius: '20px'}} placeholder="Description" className="description" {...register("description")} />
        <br />
      <input style={{padding: '10px'}} className="placeOrder" type="submit" value="Added Service"/>
    </form>
    );
};

export default AddService;