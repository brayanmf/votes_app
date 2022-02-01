import { ADD_CONTENT, UPDATE_VOTE } from "./types";

import { getAll } from "../lib/service";

export const loadTodos = (all) => ({
  type: ADD_CONTENT,
  payload: all,
});
export const sumVote = (id) => ({
  type: UPDATE_VOTE,
  payload: id,
});

export const fetchTodos = () => async (dispatch) => {
  try {
    const all = await getAll();
    dispatch(loadTodos(all));
  } catch (err) {
    console.log(err);
  }
};
