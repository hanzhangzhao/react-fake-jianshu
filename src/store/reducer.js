import { combineReducers } from 'redux-immutable';
import headerReducer from '../common/header/headerReducer';

export default combineReducers({
    header: headerReducer,
})