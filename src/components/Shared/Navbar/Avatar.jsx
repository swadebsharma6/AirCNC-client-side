import React, { useContext } from 'react';
import avatar from '../../../assets/images//placeholder.jpg';
import { AuthContext } from '../../../providers/AuthProvider';

const Avatar = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
   {user ? <img  className='rounded-full' src={user.photoURL} alt="Image" height='30' width='30' /> : <img  className='rounded-full' src={avatar} alt="Image" height='30' width='30' />}
   
        </div>
    );
};

export default Avatar;