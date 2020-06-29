import {createStore, combineReducers} from 'redux';
import  profileReducer from './profile-reducer';
import  dialogReducer from './dialog-reducer';
import  navbarReducer from './navbar-reducer';
import  usersReducer from './users-reducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
});

const store = createStore(reducers);

export default store;