import dialogReducer from './dialog-reducer';
import profileReducer from './profile-reducer';
import navbarReducer from './navbar-reducer';

class Store {
    constructor(state) {
      this._state = state;
      this._subscriber = null;
    }

    getState = () => this._state;
  
    subscribe = (observer) => {
      this._subscriber = observer;
    }

    dispatch = (action) => {
      this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.navbar = navbarReducer(this._state.navbar, action);

      this._subscriber(this._state);
    }
  }

export default Store;