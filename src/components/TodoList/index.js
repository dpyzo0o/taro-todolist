import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import TodoItem from '../TodoItem'
import NewTodo from '../NewTodo'

export default class TodoList extends Component {
  render() {
    const {
      todos,
      onAddTodo,
      onEditTodo,
      onDeleteTodo,
      onCompleteTodo,
    } = this.props

    return (
      <View className='todo-list'>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={onEditTodo}
            onDelete={onDeleteTodo}
            onComplete={onCompleteTodo}
          />
        ))}
        <NewTodo onAdd={onAddTodo} />
      </View>
    )
  }
}
