import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';
const Benifit = ({benifit}) => {
    
        return(
                <p className=' flex items-center'>
                    <CheckCircleIcon className='w-4 h-4 text-green-700'></CheckCircleIcon>
                   {benifit}
                </p>
    );
};

export default Benifit;