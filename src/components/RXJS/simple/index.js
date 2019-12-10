import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
// import { Observable , fromEvent, combineLatest} from  'rxjs' 
import { combineLatest, fromEvent, Observable } from 'rxjs';
import { map, pluck, startWith } from 'rxjs/operators';
// import Rx from 'rx'
import Rx from 'rx'

// const Simple = ({label}) => {
//   return(
//     <div>
//       <div className={`div-${label.width}`}>
//         width: <input id="width" type="text"></input>
//       </div>
//       <div className={`div-${label.length}`}>
//         length: <input id="length" type="text"></input>
//       </div>
//     </div>
    
//   )
// }
class Simple extends React.Component {
  static propTypes = {
    label: PropTypes.object,
    demo1: PropTypes.number.isRequired,
    demo2: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }
  static defaultProps = {
    label: {
      width: 'w',
      length: 'l'
    },
    demo1: 2,
    demo2: 3
  }
  constructor () {
    super()
    this.state = {
      a: 23
    }
  }
  componentWillMount () {
    console.log(Rx)
    this.setState({
      a :33
    })
  }
  componentDidMount () {
    console.log(ReactDOM.findDOMNode(this))   // 组件dom
    console.log(ReactDOM.findDOMNode(this.refs.div))   // 和vue refs一致
    const width = document.getElementById('width')
    const length = document.getElementById('length')
    const areaE = document.getElementById('areaE')

    const length$ = fromEvent(length, 'keyup').pipe(pluck('target','value'))
    const width$ = fromEvent(width, 'keyup').pipe(pluck('target','value'))
    length$.subscribe(val => console.log(val))
    const area$ = combineLatest(length$, width$,(l,w) => l*w)
    area$.subscribe(val => areaE.innerHTML = val)
  }
  render () {
    const { label } = this.props
    return (
      <div>
        <div className={`div-${label.width}`}>width: <input id="width" type="text"></input></div>
        <div ref='div' className={`div-${label.length}`}>length: <input id="length" type="text"></input></div>
        <div id="areaE"></div>
      </div>
    )
  }
}

export default Simple




