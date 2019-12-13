import { fromJS } from 'immutable';
import * as ActionTypes from './ActionTypes';

const defaultState = fromJS({
    title: '',
    content: ''
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.GET_BLOG:
            return state.merge({
                title: action.title,
                content: action.content
            })

        default:
            return state;
    }
}