import styled from 'styled-components';

export const BlogCanvas = styled.div`
    background-color: #f9f9f9;
`;

export const BlogContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;
    padding-left: 16px;
    padding-right: 16px;
`;

export const BlogWrapper = styled.div`
    width: 730px;
    margin-bottom: 24px;
    margin-right: 10px;
    padding: 24px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
`;

export const BlogTitle = styled.div`
    margin: 50px 0 20px 0;
    line-height: 44px;
    font-size: 30px;
    color: #404040;
    font-weight: 700;
`;

export const BlogContent = styled.div`
    margin-bottom: 24px;
    p, li {
        font-size: 16px
        font-weight: 400;
        line-height: 30px;
        color: #404040;
        margin-top: 1.2em;
    }
    li {
        position: relative;
        left: 1.5em;
        padding-left: 1em;
        padding-right: 1em;
        list-style-type: disc;
    }
    img {
        width: 100%;
        margin: 1.5em;
    }
    b, strong {
        font-weight: bold;
    }
`;