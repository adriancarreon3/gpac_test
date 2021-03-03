import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { readUserAction } from '../actions/auth';
import { authReducer } from '../reducers/authReducer';
import { recruitReducer } from '../reducers/recruitReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    recruit: recruitReducer
});

export const generateStore = () => {
    const store = createStore(
        reducers,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    );

    readUserAction()(store.dispatch)
    return store;
}