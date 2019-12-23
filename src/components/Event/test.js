import React from 'react'

export default class testEvent extends React.Component {
  constructor () {
    super()
  }
  componentDidMount () {
    document.addEventListener('click', () => {
      console.log('document.click')
    })
  }
  render () {
    return (
      <div onClick={this.handleClick}>
        <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
  handleClick = (e) => {
  //  e.persist()
    console.log('div click')
    e.stopPropagation()
    // e.nativeEvent.stopImmediatePropagation()
    
    setTimeout(() => {
      console.log(e)
    }, 400)
  }
}