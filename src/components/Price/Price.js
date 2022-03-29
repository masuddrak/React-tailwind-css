
import React from 'react';

const Price = (props) => {
    const {name,price}=props.price
    return (
        <div className=' bg-white p-4 rounded-lg '>
            <h2 className='text-white bg-indigo-500 p-4 rounded-xl text-xl m-5'>{name}</h2>
            <p>
                <span className='text-5xl font-bold'>${price}</span>
                 <span className='text-2xl text-gray-700 font-bold'>/mo</span>
            </p>
            
        </div>
    );
};

export default Price;