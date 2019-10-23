import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
    Container, HeaderWrapper, Logo, Nav, NavItem, NavSearch, HeaderRight, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem
} from './style';
import * as actionCreaters from './ActionCreaters';

class Header extends Component {

    showTrending(show) {
        if (this.props.focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        Trending Now
                                <SearchInfoSwitch>Expolore</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            this.props.trendList.map((item) => {
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
                            <CSSTransition in={this.props.focused} timeout={200} classNames="slide">
                                <NavSearch className={this.props.focused ? 'focused' : ''} onFocus={this.props.handleInputFocus} onBlur={this.props.handleInputBlur}>
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreaters.getTrendList());
            dispatch(actionCreaters.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreaters.searchBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);