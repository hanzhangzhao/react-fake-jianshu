// import * as ActionTypes from './ActionTypes';
import { fromJS } from 'immutable';
import * as ActionTypes from './ActionTypes';

const defaultState = fromJS({
    topicList: [],
    blogList: [],
    bloggerList: [],
    blogListPage: 1,
    showScrollTop: false,
});

const getHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        blogList: fromJS(action.blogList),
        bloggerList: fromJS(action.bloggerList),
    })
}

const extendHomeList = (state, action) => {
    return state.merge({
        'blogList': state.get('blogList').concat(action.data),
        'blogListPage': action.nextPage
    })
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.GET_HOME_DATA:
            // console.log(action)
            return getHomeData(state, action)

        case ActionTypes.EXTEND_HOME_LIST:
            return extendHomeList(state, action)

        case ActionTypes.TOGGLE_SCROLL_TOP:
            return state.set('showScrollTop', action.show)

        default:
            return state;
    }
}