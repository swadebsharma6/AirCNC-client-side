import React from 'react';
import Container from '../Shared/Container';
import CategoryBox from './CategoryBox';
import { categories } from './categoriesData';

const Categories = () => {
    return (
        <Container>
        <div className='pt-4 flex justify-between items-center overflow-x-auto'>
          {
            categories.map((item,idx) => <CategoryBox 
            key={idx}
            label={item.label}
            icon={item.icon}
            ></CategoryBox> )
          } 
        </div>
        </Container>
    );
};

export default Categories;