import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtModal, AtModalContent, AtButton, AtInput } from 'taro-ui'

import './index.scss'
import { addTodo as add_todo } from '../../actions'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  addTodo(text) {
    dispatch(add_todo(text))
  },
})

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class InputModal extends Component {
  state = {
    value: '',
  }

  handleChange = value => {
    this.setState({ value })
    return value
  }

  handleClick = () => {
    const { value } = this.state
    const { addTodo, onCloseModal } = this.props

    if (value.trim() === '') return

    addTodo(value)
    onCloseModal()
    setTimeout(() => this.setState({ value: '' }), 500)
  }

  render() {
    const { isOpened, onCloseModal } = this.props
    const { value } = this.state

    return (
      <View className='modal'>
        <AtModal isOpened={isOpened} onClose={onCloseModal}>
          <AtModalContent>
            <View className='modal-input'>
              <AtInput
                value={value}
                onChange={this.handleChange}
                placeholder='What needs to be done?'
                cursorSpacing={100}
                adjustPosition
              />
            </View>
            <View className='modal-action'>
              <AtButton
                className='custom-button'
                onClick={this.handleClick}
                type='primary'
                size='small'
                circle
              >
                Add
              </AtButton>
            </View>
          </AtModalContent>
        </AtModal>
      </View>
    )
  }
}

export default InputModal
