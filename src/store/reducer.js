import { combineReducers } from 'redux';
import headerReducer from '../common/header/headerReducer';

export default combineReducers({
    header: headerReducer,
})