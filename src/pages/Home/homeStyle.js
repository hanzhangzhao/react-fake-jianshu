import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`;

export const HomeLeft = styled.div`
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    float: left;
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding-bottom: 10px;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    padding-right: 10px;
    margin-left: 18px;
    margin-bottom: 18px;
    background：#f7f7f7;
    font-size: 14px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic{
        width: 32px;
        height: 32px;
        display: block;
        float: left;
        margin-right: 10px;
    }
`;

export const BlogListItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    .blogImg{
        display: block;
        width: 120px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;

export const BlogListContent = styled.div`
    width: 500px;
    float: left;
    .blogTitle {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .blogContent {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
    color: #969696;
`;

export const RecommendItem = styled.div`
    margin-top: 15px;
    line-height: 20px;
    list-style: none;
    .bloggerPic {
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;  
        display: block;
        cursor: pointer;        
        border: 1px solid #ddd;
        border-radius: 50%;    
    }
    .bloggerName {
        padding-top: 5px;
        font-size: 14px;
        color: #2f2f2f;
    }
    .authorOutline {
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }
    .followBlogger {
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
        text-decoration: none;
    }
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    &:hover {
        background-color: #9b9b9b;
    }
`;

export const ScrollTop = styled.div`
    position: fixed;
    right: 40px;
    bottom: 40px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 14px;
    border: 1px solid #ccc;
    z-index: 999;
    cursor: pointer;
`;