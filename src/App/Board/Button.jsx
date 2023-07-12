import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { DragDropContext } from 'react-beautiful-dnd';
import * as actions from '../../actions/actions';

export const Button = ({ type, el, id }) => {
    const dispatch = useDispatch();
    const popUp = useSelector((state) => state.tasks.popUp);
    const handleClick = (e) => {
        dispatch(actions.addPopUp(id));
    }
    const handleSubmit = (e) => {
        dispatch(actions.addCard(e, id));
    }
    const [formText, setFormText] = useState('');

    if (type === "Add") {
        if (id !== popUp) {
            return (
                <button className='button-84' onClick={handleClick}>+ Add</button>
            )
        };

        return (
            <form>
                <input className='listItem' type="text" onChange={(e) => setFormText(e.target.value)} placeholder='Enter name for card...' />
                <button type='submit' className='button-84' onClick={() => handleSubmit(formText)}>+ Add</button>
            </form>
        );
    }
    if (type === 'Describe') {
        let placeholder;
        if (!el.description) placeholder = 'Add more detailed description';
        else {
            placeholder = el.description;
        }
        return (
            <form>
                <input className='listItem' type="text" onChange={(e) => setFormText(e.target.value)} value={placeholder} />
                <button type='submit' className='button-84' onClick={() => handleSubmit(formText)}>+ Add</button>
            </form>
        );

    }

}
