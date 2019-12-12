import React from 'react'
import styles from  './index.less'
class CSS extends React.Component {
  constructor () {
    super()
    this.state = {
      have: true
    }
  }
  
  render () {
    const style = {
      color: 'red',
      fontSize: '12px'
    }
    return (
      <div style={style} className={`first ${this.state.have ? 'true' : 'false'}`}>
        <div className={styles.div}>看这个div</div>
      </div>
    )
  }
}

export default CSS