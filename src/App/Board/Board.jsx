import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import * as actions from '../../actions/actions';
import { Doing } from './Doing.jsx';
import { ToDo } from './ToDo.jsx';
import { Done } from './Done.jsx';

export const Board = () => {
    const name = 'Jeremiah';
    const current = useSelector((state) => state.tasks.Workspace[name]);
    const dispatch = useDispatch();

    const dragEnd = (result) => {
        const { source, destination } = result;
        if(!destination) return;
        if(source.droppableId === destination.droppableId){
            dispatch(actions.updateOneBoard(result, name));
        }
        else{
            dispatch(actions.updateTwoBoards(result, name))
        }

    }
    return (
        <DragDropContext
            onDragEnd={dragEnd}>
            <div className="board">
                <ToDo list={current.toDo} /><Doing list={current.doing} /><Done list={current.done} />
            </div>
        </DragDropContext>
    );
};