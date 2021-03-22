import {combineReducers} from 'redux';
import itemReducer from './itemReducer';
import sideMenuItemReducer from './sideMenuItemReducer';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';

export default combineReducers({
    item:itemReducer,
    menuItems:sideMenuItemReducer,
    form: formReducer,
    authKey:authReducer
})