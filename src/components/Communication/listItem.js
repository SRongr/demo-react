import React from 'react'
import PropTypes from 'prop-types'
import Button from './button'


class ListItem extends React.Component {
  constructor () {
    super()
    console.log(this.props)
  }
  static contextTypes = {
    color: PropTypes.string
  }
  render () {
    const { value, handleClick } = this.props
    return (
      <div>
        <div onClick={handleClick}>{value} {this.context.color}</div> {/* // 子组件触发父组件的方法改变父state */}
        listItem.button<Button></Button>
        <button onClick={this.handleEmiiter}>clickme</button>
      </div>
      
    )
  }
  componentDidMount (){
    console.log(this.props.emitter)
  }
  handleEmiiter = () => {
    this.props.emitter.emit('click' , 'haah')
  }
}

export default ListItem