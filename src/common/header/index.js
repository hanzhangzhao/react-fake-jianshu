import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Container, HeaderWrapper, Logo, Nav, NavItem, NavSearch, HeaderRight, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem } from './style';
import * as actionCreaters from './ActionCreaters';
import { withRouter } from "react-router";
import * as loginActionCreaters from '../../pages/Login/store/ActionCreaters'

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
        const { focused, handleInputFocus, handleInputBlur, trendList, logined, logoutUser } = this.props;
        if (this.props.history.location.pathname === '/login') {
            return null;
        }
        return (
            <Container>
                <HeaderWrapper>
                    <Link to='/'>
                        <Logo>HANZHANG</Logo>
                    </Link>
                    <Nav>
                        <Link to='/'>
                            <NavItem className='leftNav active'>Home</NavItem>
                        </Link>
                        {/* <NavItem className='leftNav'>bla</NavItem> */}
                        {
                            logined ? <Link to='/'><NavItem className='rightNav' onClick={logoutUser}>Logout</NavItem></Link> : <Link to='/login'><NavItem className='rightNav'>Login</NavItem></Link>
                        }
                        <NavItem className='rightNav'>En/中</NavItem>
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
        logined: state.getIn(['login', 'logined']),
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

        logoutUser() {
            dispatch(loginActionCreaters.logoutUser());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));