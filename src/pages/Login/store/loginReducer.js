import { fromJS } from 'immutable';
import * as ActionTypes from './ActionTypes';

const defaultState = fromJS({
    logined: false,
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_SUCCESS:
            return state.set('logined', action.value);
        case ActionTypes.LOGOUT:
            return state.set('logined', action.value);
        default:
            return state;
    }
}