import { createStore, combineReducers } from 'redux';
import FactReducer from './reducer';

const rootReducer=combineReducers({
    FactReducer:FactReducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;