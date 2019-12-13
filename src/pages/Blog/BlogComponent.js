import React, { PureComponent } from 'react';
import { BlogCanvas, BlogContainer, BlogWrapper, BlogTitle, BlogContent } from './blogStyle';
import { connect } from 'react-redux';
import * as ActionCreaters from './store/ActionCreaters';

class Blog extends PureComponent {
    render() {
        return (
            <BlogCanvas>
                <BlogContainer>
                    <BlogWrapper className='blog'>
                        <BlogTitle>{this.props.title}</BlogTitle>
                        <BlogContent dangerouslySetInnerHTML={{ __html: this.props.content }} />
                    </BlogWrapper>
                </BlogContainer>
            </BlogCanvas>
        )
    }

    componentDidMount() {
        this.props.getBlog(this.props.match.params.id);
    }
}

const mapStateToProps = (state) => ({
    title: state.getIn(['blog', 'title']),
    content: state.getIn(['blog', 'content']),
})

const mapDispatchToProps = (dispatch) => ({
    getBlog(id) {
        dispatch(ActionCreaters.getBlogs(id));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Blog);