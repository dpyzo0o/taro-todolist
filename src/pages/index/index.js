import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { connect } from '@tarojs/redux'

import TodoList from './TodoList'
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} from '../../constants/TodoFilters'
import * as actions from '../../actions'

import './index.scss'

const tabList = [
  { title: 'All', filter: SHOW_ALL },
  { title: 'Active', filter: SHOW_ACTIVE },
  { title: 'Completed', filter: SHOW_COMPLETED },
]

@connect(
  mapStateToProps,
  actions
)
export default class Index extends Component {
  config = {
    navigationBarTitleText: 'TODO List',
  }

  handleTabClick = value => {
    this.props.dispatchSetFilter(tabList[value].filter)
  }

  render() {
    const {
      todos,
      current,
      dispatchAdd,
      dispatchEdit,
      dispatchDelete,
      dispatchComplete,
    } = this.props

    return (
      <View className='index'>
        <AtTabs
          animated={false}
          current={current}
          tabList={tabList}
          onClick={this.handleTabClick}
        >
          {tabList.map((tab, index) => (
            <AtTabsPane current={current} index={index} key={tab.title}>
              <TodoList
                todos={todos}
                onAdd={dispatchAdd}
                onEdit={dispatchEdit}
                onDelete={dispatchDelete}
                onComplete={dispatchComplete}
              />
            </AtTabsPane>
          ))}
        </AtTabs>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(state),
    current: tabList.findIndex(tab => tab.filter === state.visibilityFilter),
  }
}

function getVisibleTodos(state) {
  switch (state.visibilityFilter) {
    case SHOW_ALL:
      return state.todos
    case SHOW_ACTIVE:
      return state.todos.filter(todo => !todo.completed)
    case SHOW_COMPLETED:
      return state.todos.filter(todo => todo.completed)
  }
}
