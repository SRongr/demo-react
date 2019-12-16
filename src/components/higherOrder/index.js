import React from 'react'
import {myContainer} from './decorator'
@myContainer
class HigherOrder extends React.Component{
  static defaultProps = {
    name: 'default'
  }
  render () {
    console.log(this.props)
    return (
      <div>
        <div>{ this.props.name }</div>
        <div>{this.props.value}</div>
      </div>
    )
  }
}

export default HigherOrder