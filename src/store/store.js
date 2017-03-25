import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from '../reducers/index';
import DevTools from '../devtools/DevTools.js';

const logger = createLogger();

const store = createStore(reducer, compose(
    applyMiddleware(logger),
    DevTools.instrument()
));

export default store;