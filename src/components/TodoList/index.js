import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import {
  addTodo as add_todo,
  deleteTodo as delete_todo,
  editTodo as edit_todo,
  completeTodo as complete_todo,
} from '../../actions'
import TodoItem from '../TodoItem'
import NewTodo from '../NewTodo'

const mapStateToProps = state => ({
  todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
  addTodo(text) {
    dispatch(add_todo(text))
  },
  editTodo(id, text) {
    dispatch(edit_todo(id, text))
  },
  deleteTodo(id) {
    dispatch(delete_todo(id))
  },
  completeTodo(id) {
    dispatch(complete_todo(id))
  },
})

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class TodoList extends Component {
  render() {
    const { todos, addTodo, editTodo, deleteTodo, completeTodo } = this.props

    return (
      <View className='todo-list'>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={editTodo}
            onDelete={deleteTodo}
            onComplete={completeTodo}
          />
        ))}
        <NewTodo onAdd={addTodo} />
      </View>
    )
  }
}

export default TodoList
