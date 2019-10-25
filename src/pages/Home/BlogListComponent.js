import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { BlogListItem, BlogListContent, LoadMore } from './homeStyle';
import { connect } from 'react-redux';
import * as ActionCreaters from './store/ActionCreaters';

class BlogList extends PureComponent {
    render() {
        const { blogList, getMoreList, page } = this.props;
        return (
            <div>
                {
                    blogList.map((item, index) => {
                        return (
                            <Link to='detail' key={index}>
                                <BlogListItem >
                                    <img className='blogImg' src={item.get('imgUrl')} alt='blogPic' />
                                    <BlogListContent>
                                        <h3 className='blogTitle'>{item.get('title')}</h3>
                                        <p className='blogContent'>{item.get('content')}</p>
                                    </BlogListContent>
                                </BlogListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={() => getMoreList(page)}>Load More</LoadMore>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    blogList: state.getIn(['home', 'blogList']),
    page: state.getIn(['home', 'blogListPage'])
})

const mapDispatchToProps = (dispatch) => ({
    getMoreList(page) {
        dispatch(ActionCreaters.getMoreList(page))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);