import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';

import '../sass/public.scss';

import explorer from '../components/explorer';
import Home from '../components/home';
import hashrate from '../components/hashrate';
import list from '../components/list';

const Main = () => (
  <main>
    <Switch>
      <Route path="/explorer/:address" component={explorer} />
      <Route path="/hashrate" component={hashrate} />
      <Route path="/list" component={list} />
      <Route exact path="/" component={Home} />
    </Switch>
  </main>
);
const App = () => (
  <div className="maincontent">
    <Main />
  </div>
);
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root'),
);
