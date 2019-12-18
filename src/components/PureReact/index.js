import React from 'react'
import pureRenderMixin from 'react-addons-pure-render-mixin'
import Children from './children'
export default class PureReact extends React.Component {
  constructor() {
    super()
    this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render() {
    return (
      <div>
        <h4>index</h4>
        <Children></Children>
      </div>
    )
  }
}