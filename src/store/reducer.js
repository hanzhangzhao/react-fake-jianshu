import { combineReducers } from 'redux-immutable';
import headerReducer from '../common/header/headerReducer';
import homeReducer from '../pages/Home/store/homeReducer';
import blogReducer from '../pages/Blog/store/blogReducer';
import loginReducer from '../pages/Login/store/loginReducer';

export default combineReducers({
    header: headerReducer,
    home: homeReducer,
    blog: blogReducer,
    login: loginReducer
});
