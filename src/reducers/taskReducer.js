import * as types from '../actions/actionTypes.js';

const initialState = {
    Workspace: {
        Jeremiah: {
            toDo: [{
                // id: 'task-1',
                task: 'failure',
                description: 'i have never won in my life'
            },
            {
                // id: 'task-2',
                task: 'sadness',
                description: 'i have never been happy in my life'
            },
            {
                // id: 'task-3',
                task: 'copium',
                description: 'i have never coped in my life'
            }
            ],
            doing: [],
            done: [],

        }
    },
    navBool: false,
    popUp: ''
};



const taskReducer = (state = initialState, action) => {
    const newTask = structuredClone(state);

    switch (action.type) {
        case types.CHANGE_NAV: {
            newTask.navBool ? newTask.navBool = false : newTask.navBool = true;
            return newTask;
        }
        case types.UPDATE_ONE_BOARD: {
            const { result, workspace } = action.payload;
            const list = newTask.Workspace[workspace][result.destination.droppableId];
            const [deleted] = list.splice(result.source.index, 1);
            list.splice(result.destination.index, 0, deleted);
            return newTask;
        }
        case types.UPDATE_TWO_BOARDS: {
            const { result, workspace } = action.payload;
            const listDest = newTask.Workspace[workspace][result.destination.droppableId];
            const listSource = newTask.Workspace[workspace][result.source.droppableId];
            const [deleted] = listSource.splice(result.source.index, 1);
            listDest.splice(result.destination.index, 0, deleted);
            return newTask;
        }
        case types.POP_UP: {
            newTask.popUp = action.payload;
            return newTask;
        }
        case types.ADD_CARD: {
            if(action.payload.task === '') return newTask;
            newTask.popUp = '';
            const list = newTask.Workspace['Jeremiah'][action.payload.id]; //pull in specific workspace
            list.push({
                // id: `task-${list.length+1}`,
                task: action.payload.task,
            })
            return newTask;
        }
        default:
            return state;

    }
};

export default taskReducer;