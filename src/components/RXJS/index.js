import React from 'react'
import rxjs from 'rxjs'
import Simple from './simple'
import './index.less'
const RXJS = () => {
  const label = {
    width: 'width',
    length: 'length'
  }
  return (
    <div>
      <div className="header">
        <h2>
          RXJS简单应用
        </h2>
      </div>
      <section className="demo-1"> 
        <Simple label={label}></Simple>
      </section>
    </div>
  )
}

export default RXJS