import React from 'react';

const Link = (props) => {
    const {name}=props.nav
    return (
        <div className=' mx-4 '>
            <li><a href="">{name}</a></li>
        </div>
    );
};

export default Link;