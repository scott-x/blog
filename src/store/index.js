import { createStore, applyMiddleware, compose } from 'redux'; //传入给compose的方法会依次执行
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(
	applyMiddleware(thunk)
));

export default store;