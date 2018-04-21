import React from 'react';

import '../sass/loading.scss';

const Loading = () => (
  <div >
    <div className="loader-inner line-spin-fade-loader">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
    <div className="mask" />
  </div>
);

export default Loading;
