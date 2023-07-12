import React from 'react';
import { Dropdowns } from './Dropdowns.jsx'


export const Header = () => {

    return (
        <div className='mainHeader'>
            <div className='title'>NotTrello</div>
            <Dropdowns placeHolder='Workspaces'/>
            <Dropdowns placeHolder='Recent'/>
            <Dropdowns placeHolder='Starred'/>
            <Dropdowns placeHolder='Templates'/>
        </div>
    );
};

// export default Header;