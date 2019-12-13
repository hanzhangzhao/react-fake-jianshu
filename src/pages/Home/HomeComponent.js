import React, { PureComponent } from 'react';
import Topic from './TopicComponent';
import BlogList from './BlogListComponent';
import RecommendBlogger from './RecommendWriterComponent';
import { HomeWrapper, HomeLeft, HomeRight, ScrollTop } from './homeStyle';
import { connect } from 'react-redux';
import * as ActionCreaters from './store/ActionCreaters';

class Home extends PureComponent {

    handleScrollTop() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <Topic />
                    <BlogList />
                </HomeLeft>
                <HomeRight>
                    <RecommendBlogger />
                </HomeRight>
                {this.props.showScrollTop ? <ScrollTop onClick={this.handleScrollTop}>Top</ScrollTop> : null}

            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.getHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.ifScrolled)
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.ifScrolled)
    }
}

const mapStateToProps = (state) => ({
    showScrollTop: state.getIn(['home', 'showScrollTop'])
})

const mapDispatchToProps = (dispatch) => ({
    getHomeData() {
        const action = ActionCreaters.getHomeData();
        dispatch(action);
    },
    ifScrolled() {
        if (document.documentElement.scrollTop > 400) {
            dispatch(ActionCreaters.toggleScrollTop(true))
        } else {
            dispatch(ActionCreaters.toggleScrollTop(false))
        }
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);