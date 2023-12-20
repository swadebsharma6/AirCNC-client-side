import React from 'react';

const CategoryBox = ({label, icon:Icon}) => {
    return (
        <div className='flex flex-col items-center justify-center gap-2 p-3 border border-transparent border-b-2 hover:text-gray-800 text-neutral-500'>
            <Icon size={26}></Icon>
            <div className='text-sm font-semibold'>
            {label}
            </div>
        </div>
    );
};

export default CategoryBox;