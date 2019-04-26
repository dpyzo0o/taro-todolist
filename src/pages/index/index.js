import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtButton } from 'taro-ui'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '首页',
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <View className="index-item">
          <AtButton type="primary" size="small" circle onClick={this.props.add}>
            +
          </AtButton>
        </View>
        <View className="index-item">
          <AtButton type="primary" size="small" circle onClick={this.props.dec}>
            -
          </AtButton>
        </View>
        <View className="index-item">
          <AtButton type="primary" size="small" onClick={this.props.asyncAdd}>
            async
          </AtButton>
        </View>
        <View>
          <Text>{this.props.counter.num}</Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({ counter }) => ({
  counter,
})

const mapDispatchToProps = dispatch => ({
  add() {
    dispatch(add())
  },
  dec() {
    dispatch(minus())
  },
  asyncAdd() {
    dispatch(asyncAdd())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
