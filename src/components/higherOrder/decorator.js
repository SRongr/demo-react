import React from 'react'

export const myContainer = (Target, propertyKey, descriptor) => {
  class WrapComp extends React.Component {
    proc(instance) {
      console.log(instance)
      return instance
    }
    render () {
      const props = Object.assign({}, this.props,{ref: this.proc.bind(this)})
      return (
        <Target value="333" {...props}></Target>
      )
    }
  }
  return WrapComp
}
