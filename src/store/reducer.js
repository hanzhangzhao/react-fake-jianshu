import { combineReducers } from 'redux-immutable';
import headerReducer from '../common/header/headerReducer';
import homeReducer from '../pages/Home/store/homeReducer';

export default combineReducers({
    header: headerReducer,
    home: homeReducer,
});
