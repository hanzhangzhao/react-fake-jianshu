import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from './homeStyle';

class Topic extends PureComponent {
    render() {
        return (
            <TopicWrapper>
                {
                    this.props.topicList.map((item) => {
                        return (
                            <TopicItem key={item.get('id')}>
                                <img className='topic-pic' src={item.get('imgUrl')} alt='topicPic' />
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }
            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    topicList: state.getIn(['home', 'topicList']),
});

export default connect(mapStateToProps, null)(Topic);