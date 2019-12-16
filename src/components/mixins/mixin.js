import React from 'react'

class Mixin extends React.Component {
  componentDidMount () {
    console.log(23)
  }
}
export default Mixin


// const mixin = (obj, mixins) => {
//   const newObj = obj
//   newObj.prototype = Object.create(obj.prototype)
//   for(let prop in mixins) {
//     if (mixins.hasOwnProperty(prop)) {
//       newObj.prototype[prop] = mixins[prop]
//     }
//   }
//   return newObj
// }

// const BigMixin = {
//   fly: () => {
//     console.log('fly')
//   }
// }
// function Big () {
//   console.log('big')
// }
// const FlyBig = mixin(Big, BigMixin)
// const flyBig = new FlyBig()
// flyBig.fly()