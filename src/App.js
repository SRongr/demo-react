import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Route, Link, Switch } from 'react-router-dom'
import logo from './logo.svg';
import Hello from './components/hello'
import RXJS from './components/RXJS'
import Event from './components/Event'
import './App.css';
import Form from './components/Form';
import CSS from './components/CSS'
import List from './components/Communication/list'
import Mixins from './components/mixins';
import HigherOrder from './components/higherOrder';
import PureReact from './components/PureReact';
import ImmutableComp from './components/Immutable';
import testEvent from './components/Event/test';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Route path="/hello" component={Hello}></Route>
          <Route path="/rxjs" component={RXJS}></Route>
          <Route path="/event" component={Event}></Route>
          <Route path="/testEvent" component={testEvent}></Route>
          <Route path="/form" component={Form}></Route>
          <Route path="/css" component={CSS}></Route>
          <Route path="/communication" component={List}></Route>
          <Route path="/mixins" component={Mixins}></Route>
          <Route path="/higher" component={HigherOrder}></Route>
          <Route path="/pure" component={PureReact}></Route>
          <Route path="/immutable" component={ImmutableComp}></Route>
        </Route>
      </Switch>
    </BrowserRouter>
 
  );
}
// React.render((
//   <Router>
//         <Route path="/hello" component={Hello}></Route>
//       </Router>
// ), document.body)

export default App;
