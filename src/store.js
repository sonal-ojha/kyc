import { applyMiddleware, createStore , compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/rootReducer';

// const enhancers = compose(
//     window.devToolsExtension ? window.devToolsExtension() : f => f
// );

const store = createStore( rootReducer, applyMiddleware( logger, thunk ) );

export default store;