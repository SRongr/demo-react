import React from 'react'

class Event extends React.Component {
  constructor() {
    super()
    this.state = {
      active: true
    }
  }
  render() {
    return (
      <div>
        <h4>this 问题</h4>
        <button className="btn1" onClick={this.handleClick.bind(this)}>onclick</button>
        <button className="btn2" onClick={this.handleClick}>onclick</button>
        <button className="btn3" ref="btn">onclick</button>
        <h4>原生与合成混用</h4>
        <button className='code' style={{display:this.state.active ? 'block' : 'none'}} onClick = {this.handleClickQr}>
          ![](qr.jpg)
        </button>
      </div>
    )
  }
  handleClick = (e)  => {
    console.log(e)
    console.log(this)  // 1. event 2.undefined
  }
  componentDidMount () {
    console.log(this)
    this.refs.btn.addEventListener('click', this.handleClick)
    document.body.addEventListener('click', e => {
      console.log('jinlai')
      this.setState({ active:false })
    })
    document.querySelector('.code').addEventListener('click',e => {
      console.log(e)
      e.stopPropagation();

    })
  }
  componentWillUnmount () {
    console.log(this)
    this.refs.btn.removeEventListener('click', this.handleClick)
    document.body.removeEventListener('click', e => {
      console.log('jinlai')
      this.setState({ active:false })
    })
    document.querySelector('.code').removeEventListener('click', e =>{
      console.log(e)
      e.stopPropagation();
    })
  }
  handleOpen(e) {
    e.preventDefault()
    this.setState({
      active: !this.state.active
    })
  }
  handleClickQr(e){
    e.preventDefault();
  }
 
}

export default Event