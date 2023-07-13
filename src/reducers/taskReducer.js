import * as types from '../actions/actionTypes.js';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
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
};



const taskReducer = (state = initialState, action) => {
    const newTask = structuredClone(state);

    switch (action.type) {
        case types.CHANGE_NAV: {
            newTask.navBool ? newTask.navBool = false : newTask.navBool = true;
            return newTask;
        }
        case types.UPDATE_ONE_BOARD: {
            const { result } = action.payload;
            const list = newTask[result.destination.droppableId];
            const [deleted] = list.splice(result.source.index, 1);
            list.splice(result.destination.index, 0, deleted);
            return newTask;
        }
        case types.UPDATE_TWO_BOARDS: {
            const { result } = action.payload;
            const listDest = newTask[result.destination.droppableId];
            const listSource = newTask[result.source.droppableId];
            const [deleted] = listSource.splice(result.source.index, 1);
            listDest.splice(result.destination.index, 0, deleted);
            return newTask;
        }
        case types.ADD_CARD: {
            if (action.payload.task === '') return newTask;
            const list = newTask[action.payload.id];
            list.push({
                id: uuidv4(),
                task: action.payload.task,
                description: ''
            })
            return newTask;
        }
        case types.UPDATE_DESCRIPTION: { //probably refactor to be faster with uuid PLEASE REFACTOR LMAO
            const { id, description, elId } = action.payload;
            const targetList = newTask[id];

            targetList.forEach(el => {
                if (el.id === elId) el.description = description;
            });
            return newTask;
        }
        case types.UPDATE_TASK: {
            const { id, task, elId } = action.payload;
            const targetList = newTask[id];

            targetList.forEach(el => {
                if (el.id === elId) el.task = task;
            });
            return newTask;
        }
        case types.DELETE_CARD: { //GOD REFACTOR THIS SHIT IS  TERRIBLE
            const { elId, id } = action.payload;
            let targetList = newTask[id];
            let index = 0;
            let found = false;
            while (index <= targetList.length - 1) {
                if (targetList[index].id === elId) {
                    found = true;
                    break;
                }
                index++;
            }
            if (found === true) {
                targetList.splice(index, 1);
            }
            return newTask;
        }
        default:
            return state;

    }
};

export default taskReducer;