import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const SavedMaps = () => {
    return (
        <div className='saved-maps'>
            <h1>Saved Maps</h1>
            <br/>
            <div className='menu-button'>
                <Link to='/'>Back</Link>
            </div>
        </div>
    )
}