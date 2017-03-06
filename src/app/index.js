import React from 'react';
import { Router, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import routes from 'routes'
import store from './store'

render(
  <Provider store={store}/>
    <Router routes={routes} history={browserHistory}/>
  <Provider/>,
  document.getElementById('myapp')
);
