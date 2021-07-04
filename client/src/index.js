import React from 'react';
import { render } from 'react-dom';
import AppContainer from './App/AppContainer';

const history = "";
const conf = "";
render(
  <React.StrictMode>
    <AppContainer history={history} conf={conf} />
  </React.StrictMode>,
  document.getElementById('root')
);

