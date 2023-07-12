import React, { useRef, useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions/actions';
import Modal, { Popup } from 'reactjs-popup';


export const Col = ({ list, id }) => {
    const [modalVis, setModalVis] = useState(false);
    const [modalTask, setModalTask] = useState({});
    const dispatch = useDispatch();
    const popUp = useSelector((state) => state.tasks.popUp);
    const handleClick = (e) => {
        dispatch(actions.addPopUp(id));
    }
    const handleSubmit = (e) => {
        dispatch(actions.addCard(e, id));
    }
    // const handlePopup = (ref) => {
    //     let width = 250;
    //     let height = 250;
    //     let left = (window.screen.availLeft + (window.screen.availWidth / 2)) - (width / 2);
    //     let top = (window.screen.availTop + (window.screen.availHeight / 2)) - (height / 2)
    //     window.open(`${ref}`,
    //         "mywindow", `name=detalis,popup=yes,menubar=1,resizable=1,width=${width},height=${height},screenX=${left},screenY=${top}`);
    //     return <Modal />
    // }
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
    // console.log(list, id)
    return (
        <>
            <Modal open={modalVis} onClose={() => { setModalVis(false); setModalTask({}) }} >
                <div className='popup-header'>Task: {modalTask.task}</div >
                <div className='popup-header'>Description</div>
                <div>
                    {modalTask.description}
                </div>
                <Button /></Modal>
            <Droppable droppableId={id}>
                {(provided) => (
                    <div className="col" {...provided.droppableProps} ref={provided.innerRef}>
                        <div className='colHeader'>{id}</div>
                        {list.map((el, index) => (
                            <Draggable draggableId={id + index} index={index} key={id + index}>
                                {(provided) => (
                                    <a className='listItem' onClick={() => { setModalVis(true); setModalTask(el) }}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}>
                                        {el.task}
                                    </a>
                                )}
                            </Draggable>
                        ))
                        }
                        {provided.placeholder}
                        <Button />
                    </div>
                )}
            </Droppable>
        </>
    );
};








