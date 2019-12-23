import React from 'react'
import { Map, List, is } from 'immutable'
// import Immutable from 'immutable'
// import cursor from 'immutable/contrib/cursor'

export default class ImmutableComp extends React.Component {
  constructor() {
    super()
    this.state = {
      data: Map({times: 0})
    }
  }
  render() {
    // let a = Map({
    //   a: '1',
    //   filter: Map({
    //     b: Map({
    //       c:3
    //     }) 
    //   })
    // })
    return (
      <div>
        <h4>Immutable</h4>

        {/* <div onClick={this.handleAdd}> {this.state.data}add</div> */}
      </div>
    )
  }
  handleAdd () {
    this.setState({
      data: this.state.data.update('tiems', v => v + 1)
    })
  }
}