import {combineReducers} from 'redux';
import itemReducer from './itemReducer';
import sideMenuItemReducer from './sideMenuItemReducer';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import productReducer from './productReducer'
import usersReducer from './userReduser'

export default combineReducers({
    item:itemReducer,
    menuItems:sideMenuItemReducer,
    form: formReducer,
    authKey:authReducer,
    productList:productReducer,
    users:usersReducer,
    user:usersReducer
})