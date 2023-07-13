import React, { useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions/actions';
import Modal from 'reactjs-popup';
import pull from '../../../pull.png'


export const Col = ({ list, id }) => {
    const [modalVis, setModalVis] = useState(false);
    const [modalTask, setModalTask] = useState({});
    const [modalIndex, setModalIndex] = useState(0);
    // const des = useSelector((state) => state.tasks.Workspace[name][id][modalIndex].description);
    const name = 'Jeremiah';
    const dispatch = useDispatch();
    const popUp = useSelector((state) => state.tasks.popUp);
    const handleClick = (type, id, task) => {
        if (type === 'Add') {
            dispatch(actions.addPopUp(id))
        };
        if (type === 'Delete') dispatch(actions.deleteCard(task, id));
    }
    const handleSubmit = (text, type, id, task) => { //refactor pls i BEG
        if (type === 'Add') dispatch(actions.addCard(text, id));
        if (type === 'Describe') dispatch(actions.updateDescription(text, id, task));
    }

    //<----------------------------------------------------------------Button Start-------------------------------------------------------------------------->
    const Button = ({ type, el, id }) => {
        const [addFormText, setAddFormText] = useState('');
        const [desFormText, setDesFormText] = useState();
        // console.log(des);
        if (type === 'Add') {

            if (id !== popUp) {
                return (
                    <button className='button-84' onClick={() => handleClick(type, id)}>+ Add</button>
                )
            };

            return (
                <form>
                    <input className='listItem' type="text" onChange={(e) => setAddFormText(e.target.value)} placeholder='Enter name for card...' />
                    <button type='submit' className='button-84' onClick={() => handleSubmit(addFormText, type, id)}>+ Add</button>
                </form>
            );
        }
        if (type === 'Describe') {
            return (
                <form>
                    <input className='listItem formInput' type="text" onChange={(e) => setDesFormText(e.target.value)} value={desFormText} />
                    <button type='submit' className='button-84 describeButton' onClick={() => { handleSubmit(desFormText, type, id, el.task); }}>Update</button>
                </form>
            );
        }
        if (type === 'Delete') {
            return (
                <form>
                    <button className='button-84 deleteButton' onClick={() => handleClick(type, id, el.task)}>X</button>
                </form>
            );
        }

    }
    //<----------------------------------------------------------------Button End-------------------------------------------------------------------------->

    return (
        <>
            <Modal open={modalVis} onClose={() => { setModalVis(false); setModalTask({}) }} >
                <div className='popup-header'>Task: {modalTask.task}</div >
                <div className='popup-header'>Description: </div>
                <Button type='Describe' el={modalTask} id={id} /></Modal>
            <Droppable droppableId={id}>
                {(provided) => (
                    <div className="col" {...provided.droppableProps} ref={provided.innerRef}>
                        <div className='colHeader'>{id}</div>
                        {list.map((el, index) => (
                            <Draggable draggableId={id + index} index={index} key={id + index}>
                                {(provided) => (
                                    <div className='listItem'
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}>
                                        <img src={pull} />
                                        <button className='listItem taskButton' onClick={() => { setModalVis(true); setModalTask(el); setModalIndex(index) }}>{el.task}</button>
                                        <Button type='Delete' el={el} id={id} />
                                    </div>

                                )}
                            </Draggable>
                        ))
                        }
                        {provided.placeholder}
                        <Button type='Add' el={modalTask} id={id} />
                    </div>
                )}
            </Droppable>
        </>
    );
};








