import React from 'react'
import ListItem from './listItem'
import PropTypes from 'prop-types'
import emitter from './event'
class List extends React.Component {
  static childContextTypes = {
    color: PropTypes.string
  }
  getChildContext () {
    return {
      color: 'red'
    }
  }
  constructor () {
    super()
    this.state = {
      name: 'list',
      list: new Array(5).fill(0).map(() => Math.floor(Math.random() * 10))
    }
  }
  render () {
    return(
      <div>
        <ul>
          {this.state.list.map((item, index) => (
            <ListItem value={item} key={index} handleClick={this.handleClick} emitter={emitter}></ListItem> // 父传子 value  handleClick
          ))}
        </ul>
      </div>
    )
  }
  handleClick = () => {
    this.setState({
      list: this.state.list.map(item => Math.floor(Math.random() * 10))
    })
  }
  componentDidMount () {
    emitter.on('click', (data) => {
      console.log(data)
    })
  }
}
export default List