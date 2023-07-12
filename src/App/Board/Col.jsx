import React, { useRef, useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions/actions';
import Modal from 'reactjs-popup';


export const Col = ({ list, id }) => {
    const dispatch = useDispatch();
    const popUp = useSelector((state) => state.tasks.popUp);
    const handleClick = (e) => {
        dispatch(actions.addPopUp(id));
    }
    const handleSubmit = (e) => {
        dispatch(actions.addCard(e, id));
    }
    const Button = () => {
        const [formText, setFormText] = useState('');
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
    return (
        <Droppable droppableId={id}>
            {(provided) => (
                <div className="col" {...provided.droppableProps} ref={provided.innerRef}>
                    <div className='colHeader'>{id}</div>
                    {list.map((el, index) => (
                        <Draggable draggableId={id + index} index={index} key={el.id}>
                            {(provided) => (
                                <div className='listItem'
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref={provided.innerRef}>
                                    {el.task}
                                </div>
                                // <Modal trigger={
                                //     <button className='listItem'
                                //         onClick={handleClick}
                                //         {...provided.draggableProps}
                                //         {...provided.dragHandleProps}
                                //         ref={provided.innerRef}
                                //     >{el.task}</button>} >
                                //     <span className='popup-content popup-overlay '>
                                //         Something incredible here
                                //     </span>
                                // </Modal>
                            )}
                        </Draggable>
                    ))
                    }
                    {provided.placeholder}
                    <Button />
                </div>
            )}
        </Droppable>
    );
};