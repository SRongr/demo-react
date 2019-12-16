import React from 'react'
import PropTypes from 'prop-types'
class Button extends React.Component {
  static contextTypes = {
    color: PropTypes.string
  }
  render () {
    return (
      <button>{this.context.color}</button>
    )
  }
} 

export default Button