import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtInput, AtIcon } from 'taro-ui'

import './index.scss'

class NewTodo extends Component {
  state = {
    value: '',
  }

  handleChange = value => {
    this.setState({ value })
    return value
  }

  handleAddTodo = () => {
    const { value } = this.state
    if (value.trim() !== '') {
      this.props.onAdd(this.state.value)
    }
    setTimeout(() => this.setState({ value: '' }), 0)
  }

  render() {
    const { value } = this.state

    return (
      <View className='new-todo'>
        <View class='new-todo-icon'>
          <AtIcon value='add' size='20' />
        </View>
        <View className='new-todo-main'>
          <AtInput
            value={value}
            onChange={this.handleChange}
            placeholder='What needs to be done?'
            onBlur={this.handleAddTodo}
          />
        </View>
      </View>
    )
  }
}

export default NewTodo
