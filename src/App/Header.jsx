import React from 'react';
// import { Dropdowns } from './Dropdowns.jsx'


export const Header = () => {

    let currentValue = 'DEFAULT';
    return (
        <div className='mainHeader'>
            <div className='title'>
                <h1>Not Trello</h1>
            </div>
            <div className='mainHeader'>
                <div className='title'>
                    <label >Choose a Workspace: </label>
                    <select className='' name='Workspaces' id='Workspaces'>
                        <option value={currentValue} defaultValue={'DEFAULT'}>Select...</option>
                        <option value='DEFAULT'>Jeremiah's Workspace</option>
                    </select>
                </div>
            </div>
        </div>
    );
};