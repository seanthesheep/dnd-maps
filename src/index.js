import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import './index.css';
import { Menu } from './main-menu/Menu.js';
import reportWebVitals from './reportWebVitals';
import { SavedMaps } from './saved-maps/SavedMaps';

ReactDOM.render(
  <Router>
    <div>
        <main>
            <Route exact path="/" component={Menu} />
            <Route path="/saved" component={SavedMaps} />
        </main>
    </div>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
