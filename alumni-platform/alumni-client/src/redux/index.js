
import { createStore,applyMiddleware,compose, combineReducers } from 'redux';

import alumniReducer from './reducers/alumniReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    alumni: alumniReducer
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)));

export default store;