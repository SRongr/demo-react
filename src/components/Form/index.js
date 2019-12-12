import React from 'react'

class Form extends React.Component {
  constructor () {
    super()
    this.state = {
      value: 23
    }
  }
  render() {
    return (
      <div>
        <input type="text" defaultValue={this.state.value} onChange={this.handleChange}></input>
      </div>
    )
  }
  componentDidMount () {
    setTimeout(() => {
      console.log(this.state)
    }, 2000)
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
}

export default Form