import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { reducer as formReducer } from 'redux-form'
import  profileReducer from './profile-reducer';
import  dialogReducer from './dialog-reducer';
import  navbarReducer from './navbar-reducer';
import  usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import appReducer from './app-reducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;