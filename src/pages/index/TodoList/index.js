import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import TodoItem from '../TodoItem'
import NewTodo from '../NewTodo'

export default class TodoList extends Component {
  static defaultProps = {
    todos: [],
  }

  render() {
    const { todos, onAdd, onEdit, onDelete, onComplete } = this.props

    return (
      <View className='todo-list'>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={onEdit}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}
        <NewTodo onAdd={onAdd} />
      </View>
    )
  }
}
