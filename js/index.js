import ReactDOM from 'react-dom';
import React from 'react';
import 'babel-polyfill';
import '@react/react-spectrum/page';

import Selector from './components/Selector';

ReactDOM.render(
  <Selector/>,
  document.getElementById('app')
);
