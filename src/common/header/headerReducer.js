import * as ActionTypes from './ActionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    trendList: [],
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.SEARCH_FOCUS:
            // immutable set method will combines the value of immutable object and value in the set method, and return a new object
            return state.set('focused', true);
        case ActionTypes.SEARCH_BLUR:
            return state.set('focused', false);
        case ActionTypes.UPDATE_TREND_LIST:
            console.log(action)
            return state.set('trendList', action.data);
        case ActionTypes.SEARCH_MOUSE_ENTER:
            return state.set('mouseIn', true);
        case ActionTypes.SEARCH_MOUSE_OUT:
            return state.set('mouseIn', false);
        default:
            return state;
    }
}