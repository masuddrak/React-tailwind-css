import React from 'react';
import Price from '../Price/Price';
const priceList=[
    {id:1,name:'Free',price:0.000,benifitis:['free','ssd 512 ulimited','Justtin time run','HDD 21254']},
    {id:2,name:'Silver',price:54.455 ,benifitis:['Siver & free','ssd 512 ulimited','Justtin time run','HDD 21254']},
    {id:3,name:'Gold',price:545.542 ,benifitis:[' Gold & free','ssd 512 ulimited','Justtin time run','HDD 21254']},
]
const PriceTitle = () => {
    return (
        <div className=' bg-indigo-700 py-8   my-8 font-mono'>
            <h1 className='text-5xl'>That is a Best Pricing</h1>
            <div className='grid md:grid-cols-3 text-stone-900 m-8  gap-4'>
                {
                  priceList.map(price=><Price
                  key={price.id}
                  price={price}
                  ></Price>)  
                }
            </div>
        </div>
    );
};

export default PriceTitle;