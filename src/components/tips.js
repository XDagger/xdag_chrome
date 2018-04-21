import React from 'react';

import '../sass/tips.scss';

const Tips = ({ closeTipsBox }) => (
  <div>
    <div className="tipsBox">
      <div className="tipsClose" onClick={closeTipsBox}><i className="icon-close icons" /></div>
      <div id="tipsOrange">connection failed!</div>
    </div>
    <div className="mask" />
  </div>
);

export default Tips;
