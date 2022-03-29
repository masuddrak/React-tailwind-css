
import React from 'react';
import {  ArrowCircleRightIcon  } from '@heroicons/react/solid';
import Benifit from '../Benifit/Benifit';
const Price = (props) => {
    const {name,price,benifitis}=props.price
    return (
        <div className=' bg-white p-4 rounded-lg '>
            <h2 className='text-white bg-indigo-500 p-4 rounded-xl text-xl '>{name}</h2>
            <p>
                <span className='text-5xl font-bold'>${price}</span>
                 <span className='text-2xl text-gray-700 font-bold'>/mo</span>
            </p>
            <div>
                <h3 className='text-left text-xl'>Benifits:</h3>
                {
                    benifitis.map(benifit=><Benifit benifit={benifit}></Benifit>)
                }
               
            </div>
            <button className='
             bg-green-700 w-full p-1 rounded-md mt-2 flex items-center justify-center text-white text-2 hover:text-green-900'>Boy Now
            <ArrowCircleRightIcon className='w-4 h-4 ml-2 '></ArrowCircleRightIcon>
            </button>
        </div>
    );
};

export default Price;