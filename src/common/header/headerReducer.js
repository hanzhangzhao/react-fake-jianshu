import * as ActionTypes from './ActionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
});

export default (state = defaultState, action) => {
    if (action.type === ActionTypes.SEARCH_FOCUS) {
        // immutable set method will combines the value of immutable object and value in the set method, and return a new object
        return state.set('focused', true);
    }
    if (action.type === ActionTypes.SEARCH_BLUR) {
        return state.set('focused', false);
    }
    return state;
}