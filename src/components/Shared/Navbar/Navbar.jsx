import React from 'react';
import Container from '../Container';
import Logo from './Logo';

import MenuDropdown from './MenuDropDown';
import Search from './Search';

const Navbar = () => {
    return (
        <div className='fixed w-full z-10 shadow-sm '>
            <div className='border border-b-2 p-2'>
            <Container>
                <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
                <Logo></Logo>
                <Search></Search>
                <MenuDropdown></MenuDropdown>
                </div>
            </Container>
            </div>
        </div>
    );
};

export default Navbar;