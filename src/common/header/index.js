import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
    Container, HeaderWrapper, Logo, Nav, NavItem, NavSearch, HeaderRight, Button, SearchWrapper
} from './style';
import * as actionCreaters from './ActionCreaters';

const Header = (props) => {
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
                        <CSSTransition in={props.focused} timeout={200} classNames="slide">
                            <NavSearch className={props.focused ? 'focused' : ''} onFocus={props.handleInputFocus} onBlur={props.handleInputBlur}>
                            </NavSearch>
                        </CSSTransition>
                        <span className='fas fa-search'></span>
                    </SearchWrapper>
                    <HeaderRight>
                        <Button className='writing'>
                            <span className="fas fa-feather-alt"></span>
                            Write Article
                        </Button>
                        <Button className='reg'>Register</Button>
                    </HeaderRight>
                </Nav>
            </HeaderWrapper>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        focused: state.header.get('focused'),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreaters.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreaters.searchBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);