import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunkMiddleware from 'redux-thunk';

const initialState = {
  loginState: false
};

const setupStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware)
    );
}

export default setupStore;
