import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateStatus = () => {
    const [Status, setStatus] = useState({});
    const {updateId} = useParams();

    useEffect(() =>{
        fetch(`https://grisly-labyrinth-59650.herokuapp.com/orders/${updateId}`)
        .then(res => res.json())
        .then(data =>{
            setStatus(data);
        })
    }, [])
    const handleNameChange = (update) => {
        const updateName = update.target.name;
        const updateStatus = {status: updateName};
        setStatus(updateStatus);
    }
    const handleUpdate = () => {
        fetch(`https://grisly-labyrinth-59650.herokuapp.com/orders/${updateId}`, {
           method: 'PUT',
           headers: {
               'content-type': 'application/json'
           },
           body: JSON.stringify(Status)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    }
    return (
          <form onSubmit={handleUpdate}>
                <input type="text" onChange={handleNameChange} />
                <input type="submit" value="Update" />
            </form> 
    );
};

export default UpdateStatus;