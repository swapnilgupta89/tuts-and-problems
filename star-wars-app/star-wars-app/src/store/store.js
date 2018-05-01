import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunkMiddleware from 'redux-thunk';

const initialState = {};

const setupStore = (initialState) => {
    return createStore(
        rootReducer,
        initialState
    );
}

export default setupStore;


