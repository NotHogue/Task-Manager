import * as types from '../actions/actionTypes.js';

const initialState = {
    Workspace: {
        Jeremiah: {
            toDo: [{
                id: '',
                task: 'failure',
                description: 'its all gone wrong'
            },
            {
                id: '',
                task: 'sadness',
                description: 'i cant even center a div'
            },
            {
                id: '',
                task: 'copium',
                description: 'this shit is ass'
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
            if (action.payload.task === '') return newTask;
            newTask.popUp = '';
            const list = newTask.Workspace['Jeremiah'][action.payload.id]; //pull in specific workspace
            list.push({
                // id: `task-${list.length+1}`,
                task: action.payload.task,
                description: ''
            })
            return newTask;
        }
        case types.UPDATE_DESCRIPTION: { //probably refactor to be faster with uuid PLEASE REFACTOR LMAO
            const { task, id, description } = action.payload;
            const targetList = newTask.Workspace['Jeremiah'][id];

            targetList.forEach(el => {
                if (el.task === task) el.description = description;
            });
            return newTask;
        }
        case types.DELETE_CARD: { //GOD REFACTOR THIS SHIT IS  TERRIBLE
            const { task, id } = action.payload;
            let targetList = newTask.Workspace['Jeremiah'][id];
            let index = 0;
            let found = false;
            while (index <= targetList.length - 1) {
                if (targetList[index].task === task) {
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