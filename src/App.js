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
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Route path="/hello" component={Hello}></Route>
          <Route path="/rxjs" component={RXJS}></Route>
          <Route path="/event" component={Event}></Route>
          <Route path="/form" component={Form}></Route>
          <Route path="/css" component={CSS}></Route>
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
