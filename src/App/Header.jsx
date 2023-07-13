import React from 'react';
import { v4 as uuidv4 } from 'uuid';


export const Header = () => {
    const workspaces = {
        Jeremiah: {
            name: 'Jeremiah',
            toDo: [{
                id: uuidv4(),
                task: 'failure',
                description: 'its all gone wrong'
            },
            {
                id: uuidv4(),
                task: 'sadness',
                description: 'i cant even center a div'
            },
            {
                id: uuidv4(),
                task: 'copium',
                description: 'this shit is ass'
            }],
            doing: [],
            done: [],
        },
        Demo: {
            name: 'Jeremiah',
            toDo: [{
                id: uuidv4(),
                task: 'failure',
                description: 'its all gone wrong'
            },
            {
                id: uuidv4(),
                task: 'sadness',
                description: 'i cant even center a div'
            },
            {
                id: uuidv4(),
                task: 'copium',
                description: 'this shit is ass'
            }],
            doing: [],
            done: [],
        },
        Secret: {
            name: 'Jeremiah',
            toDo: [{
                id: uuidv4(),
                task: 'failure',
                description: 'its all gone wrong'
            },
            {
                id: uuidv4(),
                task: 'sadness',
                description: 'i cant even center a div'
            },
            {
                id: uuidv4(),
                task: 'copium',
                description: 'this shit is ass'
            }],
            doing: [],
            done: [],
        },
    }

    let currentValue = 'DEFAULT';
    return (
        <div className='mainHeader'>
            <div className='title'>
                <h1>Not Trello</h1>
            </div>
            <div className='mainHeader'>
                <div className='title'>
                    <label className='workLabel'>Choose a Workspace: </label>
                    <select className='listItem addForm' name='Workspaces' id='Workspaces'>
                        <option value={currentValue} defaultValue={'DEFAULT'}>Select...</option>
                        <option value='DEFAULT'>Jeremiah's Workspace</option>
                    </select>
                </div>
            </div>
        </div>
    );
};