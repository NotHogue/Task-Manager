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
export const addPopUp = (id) => ({
  type: types.POP_UP,
  payload: id
});