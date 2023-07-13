import React, { useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions/actions';
import Modal from 'reactjs-popup';
import pull from '../../../pull.png'
import pencil from '../../../Pencil.png'


export const Col = ({ list, id }) => {
    const [modalVis, setModalVis] = useState(false);
    const [modalTask, setModalTask] = useState({});
    const [popUp, setPopUp] = useState('');
    const name = 'Jeremiah';
    const dispatch = useDispatch();
    const handleClick = (type, id, task) => {
        if (type === 'Delete') dispatch(actions.deleteCard(task, id));
    }
    const handleSubmit = (text, type, id, elId) => { //refactor pls i BEG
        if (type === 'Add') dispatch(actions.addCard(text, id));
        if (type === 'Describe') dispatch(actions.updateDescription(text, id, elId));
    }

    //<----------------------------------------------------------------Button Start-------------------------------------------------------------------------->
    const Button = ({ type, el, id }) => {
        const list = useSelector((state) => state.tasks.Workspace[name][id]);
        const obj = list.find((o) => o.id === el.id);
        const des = obj ? obj.description : '';
        const [addFormText, setAddFormText] = useState('');
        const [desFormText, setDesFormText] = useState(des);
        const [addDes, setAddDes] = useState(false);
        if (type === 'Add') {

            if (id !== popUp) {
                return (
                    <button className='button-84' onClick={() => setPopUp(id)}>+ Add</button>
                )
            };

            return (
                <form>
                    <input className='listItem addForm' type="text" onChange={(e) => setAddFormText(e.target.value)} placeholder='Enter name for card...' />
                    <button type='submit' className='button-84' onClick={() => { handleSubmit(addFormText, type, id); setPopUp('') }}>+ Add</button>
                </form>
            );
        }
        if (type === 'Describe' && addDes === true) {
            return (
                <form>
                    <input className='listItem formInput' type="text" onChange={(e) => setDesFormText(e.target.value)} value={desFormText} />
                    <button type='submit' className='button-84 describeButton' onClick={() => { handleSubmit(desFormText, type, id, el.id); setAddDes(false) }}>Update</button>
                </form>
            );
        }
        if (type === 'Describe' && addDes === false) {
            return (
                <><div className='listItem formInput'>{desFormText}</div>
                    <div className='describeButtonContainer'>
                        <button type='submit' className='button-84 describeButton'>Update</button>
                        <button className='button-84 pencilButton' onClick={() => setAddDes(true)}><img src={pencil} /></button>
                    </div></>


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
                <button className='button-84 closeModal' onClick={() => setModalVis(false)}>X</button>
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
                                        <button className='listItem taskButton' onClick={() => { setModalVis(true); setModalTask(el); }}>{el.task}</button>
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








