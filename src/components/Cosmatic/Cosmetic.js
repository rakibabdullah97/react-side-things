import React from 'react';
import { addToDb, removefromDb } from '../utilities/fakedb';

const Cosmetic = (props) => {


    const { name, price, _id, gender } = props.cosmatic;
    const handlePurchase = id => {
        //set to local storage
        console.log(id);
        addToDb(id);
    }

    const handleRemove =id=>{
        removefromDb(id)
    }
    return (
        <div>
            <h2>name: {name}</h2>
            <p>_id:{_id} Price:${price} </p>
            <p> gender:{gender}</p>
            <button onClick={() => handlePurchase(_id)} >Purchase</button>
            <button onClick={()=>handleRemove(_id)}  >remove</button>
        </div>
    );
};

export default Cosmetic;