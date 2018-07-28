import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/home';
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/" component={App}/>
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.app__container'));
