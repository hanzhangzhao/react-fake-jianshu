import styled from 'styled-components';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Anonymous Pro', 'UnifrakturCook', 'Poppins']
    }
})

export const Container = styled.div`
    // position: fixed;
    right: 0;
    left: 0;
    z-index: 1030;
    border-bottom: 1px solid #f0f0f0;
`;

export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    min-width: 768px;
    max-width: 1440px;
    margin: 0 auto;
`;

export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 58px;
    width: 100px;
    font-family: 'Poppins', sans-serif;
    font-size: 1.3em;
    font-weight: 400;
    color: #ea6f5a;
    text-decoration: none;
    line-height: 58px;
    text-align: center;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    padding-right: 80px;
    box-sizing: border-box;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    line-height: 58px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.leftNav {
        float: left;
    }
    &.rightNav {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .fa-search {
        position: absolute;
        right: 10px;
        bottom: 10px;
        width: 20px;
        height: 20px;
        line-height: 20px;
        border-radius: 10px;
        text-align: center;
        color: #969696;
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: 'search'
})`
    width: 160px;
    height: 38px;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    margin-top: 9px;
    margin-left: 20px;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
    &.slide-enter {
        width: 160px;
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 20px;
    top: 58px;
    width: 240px;
    padding: 0 20px;
    box-sizing: border-box;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
	background: #fff;
`;

export const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
`;

export const SearchInfoSwitch = styled.span`
	float: right;
	font-size: 13px;
	cursor: pointer;
	.spin {
		display: block;
		float: left;
		font-size: 12px;
		margin-right: 2px;
		transition: all .2s ease-in;
		transform-origin: center center;
	}
`;

export const SearchInfoList = styled.div`
	overflow: hidden;
`;

export const SearchInfoItem = styled.a`
	display: block;
	float: left;
	line-height: 20px;
	padding: 0 5px;
	margin-right: 5px;
	margin-bottom: 15px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
`;

export const HeaderRight = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 58px;
`;

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.writing {
        color: #fff;
        background: #ec6149;
    }
`;