import axios from 'axios';
import * as ActionTypes from './ActionTypes';

const getBlog = (title, content) => ({
    type: ActionTypes.GET_BLOG,
    title,
    content
})

export const getBlogs = (id) => {
    return (dispatch) => {
        axios.get('/api/blogs.json?id=' + id).then((res) => {
            const result = res.data.data;
            dispatch(getBlog(result.title, result.content));
        })
    }
}