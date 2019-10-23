import * as ActionTypes from './ActionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

export const searchFocus = () => ({
    type: ActionTypes.SEARCH_FOCUS,
});

export const searchBlur = () => ({
    type: ActionTypes.SEARCH_BLUR,
});

const updateTrendList = (list) => ({
    type: ActionTypes.UPDATE_TREND_LIST,
    data: fromJS(list)
})

export const getTrendList = () => {
    return (dispatch) => {
        axios.get('/api/trendList.json').then((res) => {
            const list = res.data;
            dispatch(updateTrendList(list.data));
        }).catch(() => {
            console.log('error');
        })
    }
};