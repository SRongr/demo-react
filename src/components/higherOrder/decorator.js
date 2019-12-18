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

export const myContainerReverse = (Target, propertyKey, descriptor) => {
  class WrapComp extends Target {
    render () {
      console.log(this.displayName)
      return (
        <div>
          <h4>HOC</h4>
          <div>{super.render()}</div>
        </div>
      )
    }
  }
  return WrapComp
}

export const myContainerReverseByParams = (params) => {
  return (Target, propertyKey, descriptor) => {
    // do something by params
    params += 'do'
    class WrapComp extends React.Component {
      render () {
        const props = {
          name: params
        }
        return (
          <Target {...props}></Target>
        )
      }
    }
    return WrapComp
  }
}