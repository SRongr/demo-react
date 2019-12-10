import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Route, Link, Switch } from 'react-router-dom'
import logo from './logo.svg';
import Hello from './components/hello'
import RXJS from './components/RXJS'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Route path="/hello" component={Hello}></Route>
          <Route path="/rxjs" component={RXJS}></Route>
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
