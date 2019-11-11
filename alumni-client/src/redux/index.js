import { createStore,applyMiddleware,compose } from 'redux';
import alumniReducer from './reducers/alumni';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


let store = createStore(alumniReducer,composeEnhancer(applyMiddleware(thunk)));

export default store;