import React from 'react';
import avatar from '../../../assets/images//placeholder.jpg';

const Avatar = () => {
    return (
        <div>
            <img  className='rounded-full' src={avatar} alt="Image" height='30' width='30' />
        </div>
    );
};

export default Avatar;