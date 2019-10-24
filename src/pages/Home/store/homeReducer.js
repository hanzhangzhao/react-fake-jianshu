// import * as ActionTypes from './ActionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            title: 'General Election',
            imgUrl: 'https://pbs.twimg.com/profile_images/378800000088077660/95d085c3780618ce5efd17251154a139.png'
        },
        {
            id: 2,
            title: 'React',
            imgUrl: 'https://cdnjs.cloudflare.com/ajax/libs/react-uwp/1.2.31/images/icons/icon-256x256.png'
        }, {
            id: 3,
            title: 'Movie',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Erl3JTstdZGbwEsLXrvXgZi9qzIHwp4GiQtyfI_ndk0F1VX3&s'
        }
    ]
});

export default (state = defaultState, action) => {
    switch (action.type) {


        default:
            return state;
    }
}