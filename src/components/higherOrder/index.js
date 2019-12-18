import React from 'react'
import {myContainer, myContainerReverse, myContainerReverseByParams} from './decorator'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// @myContainer
// @myContainerReverse
@myContainerReverseByParams('params')
class HigherOrder extends React.Component{
  static defaultProps = {
    name: 'default'
  }
  constructor () {
    super()
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render () {
    return (
      <div>
        <div>{ this.props.name }</div>
        <div>{this.props.value}</div>
      </div>
    )
  }
  componentDidMount() {
    console.log('this')
  }
}

export default HigherOrder