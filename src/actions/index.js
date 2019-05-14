import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL_TODOS,
  CLEAR_COMPLETED,
  SET_VISIBILITY_FILTER,
} from '../constants/ActionTypes'

export const dispatchAdd = text => ({
  type: ADD_TODO,
  payload: { text },
})

export const dispatchDelete = id => ({
  type: DELETE_TODO,
  payload: { id },
})

export const dispatchEdit = (id, text) => ({
  type: EDIT_TODO,
  payload: { text, id },
})

export const dispatchComplete = id => ({
  type: COMPLETE_TODO,
  payload: { id },
})

export const dispatchCompleteAll = () => ({
  type: COMPLETE_ALL_TODOS,
})

export const dispatchClearCompleted = () => ({
  type: CLEAR_COMPLETED,
})

export const dispatchSetFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  payload: { filter },
})
