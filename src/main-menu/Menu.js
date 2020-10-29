import react, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import logo from '../logo.png';

export const Menu = () => {
    return (
        <div className='main-menu'>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>DnD Map Maker</h1>
            <div className='menu-button'>
                <Link to='#' onClick={() => alert('fak off')}>New Map</Link>
            </div>
            <br />
            <div className='menu-button'>
                <Link to='/saved'>Saved Maps</Link>
            </div>
        </div>
    )
}