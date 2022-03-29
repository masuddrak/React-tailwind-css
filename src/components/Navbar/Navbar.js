import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Navbar = () => {
    const [open,setOpen]=useState(false)
    const navbars=[
        {id:1, name:'Home',link:'/home'},
        {id:2, name:'Shope',link:'/shopenpm install @heroicons/react'},
        {id:3, name:'Home',link:'/home'},
        {id:4, name:'Home',link:'/home'},
    ]
    return (
        <nav className=' bg-indigo-400 h-10 items-center'>
            <div onClick={()=>setOpen(!open)} className='w-6 h-6 md:hidden'>
                {
                    open? <XIcon></XIcon>:<MenuIcon></MenuIcon>
                }
            
            </div>
            <ul className={`md:flex justify-center duration-500 w-full md:static ease-in bg-indigo-400 absolute ${open? 'top-6': 'top-[-105px]'}`}>
                {
                   navbars.map(nav=><Link
                    key={nav.id}
                    nav={nav}
                   ></Link>) 
                }
            </ul>
        </nav>
    );
};

export default Navbar;