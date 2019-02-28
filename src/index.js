import React from 'react';
import ReactDOM from 'react-dom';
import Base from './layouts/base/Base';
import Home from './pages/Todo/Todo';

import './index.css';

ReactDOM.render(
  <Base>
    <Home/>
  </Base>,
  document.getElementById('root')
);
