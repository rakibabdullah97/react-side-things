import React, { useEffect, useState } from 'react';

const Consmetics = () => {
    const[cosmetics,setCosmetics]=useState([])
    useEffect(()=>{
        fetch('/public/Cosmatics.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            <h3>shop my cosmetics</h3>
        </div>
    );
};

export default Consmetics;