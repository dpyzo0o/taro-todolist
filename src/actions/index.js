import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL_TODOS,
  CLEAR_COMPLETED,
  SET_VISIBILITY_FILTER,
} from '../constants/ActionTypes'

export const addTodo = text => ({
  type: ADD_TODO,
  payload: { text },
})

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: { id },
})

export const editTodo = (id, text) => ({
  type: EDIT_TODO,
  payload: { text, id },
})

export const completeTodo = id => ({
  type: COMPLETE_TODO,
  payload: { id },
})

export const completeAllTodo = () => ({
  type: COMPLETE_ALL_TODOS,
})

export const clearCompleted = () => ({
  type: CLEAR_COMPLETED,
})

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  payload: { filter },
})
