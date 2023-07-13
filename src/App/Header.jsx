import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/actions.js';



export const Header = () => {
    const dispatch = useDispatch();
    const workspaces = {
        Jeremiah: {
            name: 'Jeremiah',
            toDo: [{
                id: uuidv4(),
                task: 'hopium',
                description: 'i cant even center a div'
            }],
            doing: [{
                id: uuidv4(),
                task: 'i am struggle',
                description: 'its all gone wrong'
            }],
            done: [{
                id: uuidv4(),
                task: 'perish',
                description: 'this shit is ass'
            }],
            tempId: uuidv4()
        },
        Demo: {
            name: 'Demo',
            toDo: [{
                id: uuidv4(),
                task: 'failure',
                description: 'its all gone wrong'
            }],
            doing: [{
                id: uuidv4(),
                task: 'copium',
                description: 'my brain is very smooth'
            }],
            done: [{
                id: uuidv4(),
                task: 'sadness',
                description: 'i cant even center a div'
            }],
            tempId: uuidv4(),
        },
        Secret: {
            name: 'Secret',
            toDo: [{
                id: uuidv4(),
                task: 'secret',
                description: 'its all gone wrong'
            },
            {
                id: uuidv4(),
                task: 'secret',
                description: 'i cant even center a div'
            },
            {
                id: uuidv4(),
                task: 'secret',
                description: 'this shit is ass'
            }],
            doing: [{
                id: uuidv4(),
                task: 'secret',
                description: 'its all gone wrong'
            },
            {
                id: uuidv4(),
                task: 'secret',
                description: 'i cant even center a div'
            }],
            done: [{
                id: uuidv4(),
                task: 'secret',
                description: 'its all gone wrong'
            },
            {
                id: uuidv4(),
                task: 'secret',
                description: 'i cant even center a div'
            },
            {
                id: uuidv4(),
                task: 'secret',
                description: 'this shit is ass'
            }],
            tempId: uuidv4(),
        },
    }
    const handleChange = (e) => {
        dispatch(actions.updateState(workspaces[e.target.value]));
    }

    return (
        <div className='mainHeader'>
            <div className='title'>
                <h1>Not Trello</h1>
            </div>
            <div className='mainHeader' key='outerHeader'>
                <div className='title' key='innerHeader'>
                    <label className='workLabel'>Choose a Workspace: </label>
                    <select onChange={(e) => handleChange(e)} className='listItem addForm' name='Workspaces' id='Workspaces'>
                        {Object.keys(workspaces).map((el) => {
                            return (
                                <option value={workspaces[el].name} key={workspaces[el].tempId}>{el}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
        </div>
    );
};