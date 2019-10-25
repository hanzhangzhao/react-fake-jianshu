import React, { PureComponent } from 'react';
import { RecommendWrapper, RecommendItem } from './homeStyle';
import { connect } from 'react-redux';

class RecommendBlogger extends PureComponent {
    render() {
        return (
            <RecommendWrapper>
                Recommended Bloggers
                {
                    this.props.bloggerList.map((item) => {
                        return (
                            <RecommendItem key={item.get('id')}>
                                <img className='bloggerPic' src={item.get('imgUrl')} alt='bloggerAvatar' />
                                <a className='followBlogger' href='/'>+ Follow</a>
                                <p className='bloggerName'>{item.get('name')}</p>
                                <p className='authorOutline'>{item.get('blogNum')} blogs</p>
                            </RecommendItem>
                        )
                    })
                }
                {/* <RecommendItem>
                    <img className='bloggerPic' src='//cdn2.jianshu.io/assets/default_avatar/15-a7ac401939dd4df837e3bbf82abaa2a8.jpg' alt='bloggerAvatar' />
                    <a className='followBlogger' href='/'>+ Follow</a>
                    <p className='bloggerName'>hanzhang</p>
                    <p className='authorOutline'>3 blogs</p>
                </RecommendItem> */}
            </RecommendWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    bloggerList: state.getIn(['home', 'bloggerList']),
})

export default connect(mapStateToProps, null)(RecommendBlogger);