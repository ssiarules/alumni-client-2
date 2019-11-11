import { createStore } from 'redux';
import alumniReducer from './reducers/alumni';

let store = createStore(
    alumniReducer
);

export default store;