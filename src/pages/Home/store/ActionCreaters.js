import * as ActionTypes from './ActionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';

const getHome = (result) => ({
    type: ActionTypes.GET_HOME_DATA,
    topicList: result.topicList,
    blogList: result.blogList,
    bloggerList: result.bloggerList
})

export const getHomeData = () => {
    return (dispatch) => {
        axios.get('/api/homeData.json').then((res) => {
            const result = res.data.data;
            console.log(result);
            dispatch(getHome(result));
        })
    }
}

const extendHomeList = (list, nextPage) => ({
    type: ActionTypes.EXTEND_HOME_LIST,
    data: fromJS(list),
    nextPage
})

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeBlogList.json?page=' + page).then((res) => {
            const result = res.data.data.blogList;
            dispatch(extendHomeList(result, page + 1));
        })
    }
}

export const toggleScrollTop = (show) => ({
    type: ActionTypes.TOGGLE_SCROLL_TOP,
    show
})