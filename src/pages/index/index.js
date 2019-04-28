import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import TodoList from '../../components/TodoList'

class Index extends Component {
  config = {
    navigationBarTitleText: 'TODO List',
  }

  render() {
    return (
      <View className='index'>
        <TodoList />
      </View>
    )
  }
}

export default Index
