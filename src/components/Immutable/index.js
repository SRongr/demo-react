import React from 'react'
import { Map, List, is } from 'immutable'
// import Immutable from 'immutable'
// import cursor from 'immutable/contrib/cursor'

export default class ImmutableComp extends React.Component {
  constructor() {
    super()
    this.state = {
      data: Map({times: 0}),
      data2: {times: 0}
    }
  }
  render() {
    return (
      <div>
        <h4>Immutable</h4>
        <button onClick={this.handleAdd}>this.state.data.get('times'){this.state.data.get('times')}</button>
        <button onClick={this.handleAdd2}>this.state.data2.times{this.state.data2.times}</button>
        {/* <div onClick={this.handleAdd}> {this.state.data}add</div> */}
      </div>
    )
  }
  handleAdd = () => {
    this.setState(({data}) => {
        return {data: data.update('times', v => v + 1)}
    })
    console.log(this.state.data.get('times'))
  }
  handleAdd2 = () => {
    this.setState({
        data2: {
            times: this.state.data2.times + 1
        }
    })
  }
}