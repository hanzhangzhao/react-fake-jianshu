import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
    Container, HeaderWrapper, Logo, Nav, NavItem, NavSearch, HeaderRight, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem
} from './style';
import * as actionCreaters from './ActionCreaters';

class Header extends Component {

    showTrending() {
        const { focused, mouseIn, trendList, handleMouseEnter, handleMouseOut } = this.props;
        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}>
                    <SearchInfoTitle>
                        Trending Now
                                <SearchInfoSwitch>Expolore</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            trendList.map((item) => {
                                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        }
        else {
            return null;
        }
    }

    render() {
        const { focused, handleInputFocus, handleInputBlur, trendList } = this.props;
        return (
            <Container>
                <HeaderWrapper>
                    <Logo href='/'>HANZHANG</Logo>
                    <Nav>
                        <NavItem className='leftNav active'>Home</NavItem>
                        <NavItem className='leftNav'>bla</NavItem>
                        <NavItem className='rightNav'>Login</NavItem>
                        <NavItem className='rightNav'>Aa</NavItem>
                        <SearchWrapper>
                            <CSSTransition in={focused} timeout={200} classNames="slide">
                                <NavSearch className={focused ? 'focused' : ''} onFocus={() => handleInputFocus(trendList)} onBlur={handleInputBlur}>
                                </NavSearch>
                            </CSSTransition>
                            <span className='fas fa-search'></span>
                            {this.showTrending()}
                        </SearchWrapper>
                        <HeaderRight>
                            <Button className='writing'>
                                <span className="fas fa-feather-alt"></span>
                                &nbsp;Write Article
                        </Button>
                            <Button className='reg'>Register</Button>
                        </HeaderRight>
                    </Nav>
                </HeaderWrapper>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        // focused: state.get('header').get('focused'),
        trendList: state.getIn(['header', 'trendList']),
        mouseIn: state.getIn(['header', 'mouseIn']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(trendList) {
            (trendList.size === 0) && dispatch(actionCreaters.getTrendList());
            dispatch(actionCreaters.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreaters.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreaters.searchMouseEnter());
        },
        handleMouseOut() {
            dispatch(actionCreaters.searchMouseOut());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);