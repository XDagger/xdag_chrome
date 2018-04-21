import React from 'react';
import { Link } from 'react-router-dom';

import '../sass/nav.scss';

const Navs = ({ showAlert, showStates }) => (
  <nav id="nav" className={showAlert ? 'fadeInLeft animated' : 'animated'}>
    <i className="icon-close icons" onClick={() => showStates(false)} />
    <ul>
      <li><Link to="/">HOME</Link></li>
      <li><Link to="/hashrate">NETWORK HASHRATE</Link></li>
      <li><Link to="/list">POOLS LIST</Link></li>
    </ul>
  </nav>
);

export default Navs;
