import { SET_VISIBILITY_FILTER } from '../constants/ActionTypes'
import { SHOW_ALL } from '../constants/TodoFilters'

export default function visibilityFilter(state = SHOW_ALL, { type, payload }) {
  switch (type) {
    case SET_VISIBILITY_FILTER:
      return payload.filter

    default:
      return state
  }
}
