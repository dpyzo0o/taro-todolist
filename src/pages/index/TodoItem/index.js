import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtInput, AtIcon } from 'taro-ui'
import classNames from 'classnames'

import './index.scss'

class TodoItem extends Component {
  static defaultProps = {
    todo: {},
  }

  state = {
    value: '',
  }

  componentWillMount() {
    const { todo } = this.props
    this.setState({ value: todo.text })
  }

  handleChange = value => {
    this.setState({ value })
    return value
  }

  handleBlur = (id, text) => {
    if (text !== this.props.todo.text) {
      this.props.onEdit(id, text)
    }
  }

  handleDelete = id => {
    this.props.onDelete(id)
  }

  handleComplete = id => {
    this.props.onComplete(id)
  }

  render() {
    const { todo } = this.props
    return (
      <View className='todo-item'>
        <View
          className='todo-item-toggle'
          onClick={this.handleComplete.bind(this, todo.id)}
        >
          {todo.completed && <View className='todo-item-toggle__inner' />}
        </View>
        <View
          className={classNames({
            'todo-item-main': true,
            'todo-item-done': todo.completed,
          })}
        >
          <AtInput
            value={this.state.value}
            onChange={this.handleChange}
            onBlur={this.handleBlur.bind(this, todo.id)}
          >
            <AtIcon
              value='close'
              size='20'
              color='#F00'
              onClick={this.handleDelete.bind(this, todo.id)}
            />
          </AtInput>
        </View>
      </View>
    )
  }
}

export default TodoItem
