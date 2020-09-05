import {createStore, combineReducers, applyMiddleware} from 'redux';
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

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;