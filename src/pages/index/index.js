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
import {
  setVisibilityFilter,
  addTodo as add_todo,
  editTodo as edit_todo,
  deleteTodo as delete_todo,
  completeTodo as complete_todo,
} from '../../actions'

const tabList = [
  { title: 'All', filter: SHOW_ALL },
  { title: 'Active', filter: SHOW_ACTIVE },
  { title: 'Completed', filter: SHOW_COMPLETED },
]

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class Index extends Component {
  config = {
    navigationBarTitleText: 'TODO List',
  }

  handleTabClick = value => {
    const { setFilter } = this.props
    setFilter(tabList[value].filter)
  }

  render() {
    const {
      todos,
      addTodo,
      editTodo,
      deleteTodo,
      completeTodo,
      current,
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
                onAddTodo={addTodo}
                onEditTodo={editTodo}
                onDeleteTodo={deleteTodo}
                onCompleteTodo={completeTodo}
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

function mapDispatchToProps(dispatch) {
  return {
    setFilter(filter) {
      dispatch(setVisibilityFilter(filter))
    },
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
  }
}

function getVisibleTodos(state) {
  const filter = state.visibilityFilter
  switch (filter) {
    case SHOW_ALL:
      return state.todos
    case SHOW_ACTIVE:
      return state.todos.filter(todo => !todo.completed)
    case SHOW_COMPLETED:
      return state.todos.filter(todo => todo.completed)
  }
}
