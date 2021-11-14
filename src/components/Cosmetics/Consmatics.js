import React, { useEffect, useState } from 'react';
import { add, multiply } from '../../utilities/storage';

const Consmatics = () => {
    const [cosmetics, setCosmetics] = useState([])
    useEffect(() => {
        fetch('./Cosmatics.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h3>hey there</h3>
            {
                cosmetics.map(cosmetic=> )
            }
        </div>
    );
};

export default Consmatics;