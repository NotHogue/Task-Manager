import * as types from './actionTypes.js';

export const changeNavBar = () => ({
  type: types.CHANGE_NAV,
  // payload: marketId,
});
export const updateOneBoard = (result, workspace) => ({
  type: types.UPDATE_ONE_BOARD,
  payload: {
    result: result,
    workspace: workspace
  }
});
export const updateTwoBoards = (result, workspace) => ({
  type: types.UPDATE_TWO_BOARDS,
  payload: {
    result: result,
    workspace: workspace
  }
});
export const addCard = (text, id) => ({
  type: types.ADD_CARD,
  payload: {
    task: text,
    id: id
  }
});
export const updateDescription = (text, id, elId) => ({
  type: types.UPDATE_DESCRIPTION,
  payload: {
    elId: elId,
    id: id,
    description: text
  }
});
export const deleteCard = (task, id) => ({
  type: types.DELETE_CARD,
  payload: {
    task: task,
    id: id
  }
});
