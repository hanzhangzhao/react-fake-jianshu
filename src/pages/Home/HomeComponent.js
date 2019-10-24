import React, { Component } from 'react';
import Topic from './Topic';
import BlogList from './BlogList';
import Recommend from './Recommend';
import { HomeWrapper, HomeLeft, HomeRight } from './homeStyle';

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <Topic>

                    </Topic>
                    <BlogList />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;