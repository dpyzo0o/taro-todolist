import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL_TODOS,
  CLEAR_COMPLETED,
} from '../constants/ActionTypes'

const INITIAL_STATE = [
  {
    id: 0,
    text: 'Hello Taro',
    completed: false,
  },
  {
    id: 1,
    text: 'Hello Weapp',
    completed: false,
  },
]

export default function todos(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          text: payload.text,
          completed: false,
        },
      ]

    case DELETE_TODO:
      return state.filter(todo => todo.id !== payload.id)

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === payload.id ? { ...todo, text: payload.text } : todo
      )

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo
      )

    case COMPLETE_ALL_TODOS:
      const areAllMarked = state.every(todo => todo.completed)
      return state.map(todo => ({ ...todo, completed: !areAllMarked }))

    case CLEAR_COMPLETED:
      return state.filter(todo => !todo.completed)

    default:
      return state
  }
}
