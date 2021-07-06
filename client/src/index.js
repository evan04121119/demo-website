import React from 'react';
import { render } from 'react-dom';
import AppContainer from './containers/App/AppContainer';

const history = "history";
const conf = "conf";
render(
  <React.StrictMode>
    <AppContainer history={history} conf={conf} />
  </React.StrictMode>,
  document.getElementById('root')
);

