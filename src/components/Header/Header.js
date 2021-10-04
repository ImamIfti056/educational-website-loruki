import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "700"
    }
    return (
        <div className="bg-success text-light p-3">
            <div className='container d-flex align-items-center justify-content-between'>
                <h1>Loruki</h1>
                <nav className="navbar">
                    <NavLink activeStyle={activeStyle} className='text-decoration-none mx-3 text-light fs-5' to='/home'>Home</NavLink>
                    <NavLink activeStyle={activeStyle} className='text-decoration-none mx-3 text-light fs-5' to='/services'>Services</NavLink>
                    <NavLink activeStyle={activeStyle} className='text-decoration-none mx-3 text-light fs-5' to='/about'>About</NavLink>
                    <NavLink activeStyle={activeStyle} className='text-decoration-none mx-3 text-light fs-5' to='/login'>Login</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;