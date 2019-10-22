import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import {
    Container, HeaderWrapper, Logo, Nav, NavItem, NavSearch, HeaderRight, Button, SearchWrapper
} from './style'

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focused: false,
        }
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
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
                            <CSSTransition in={this.state.focused} timeout={200} classNames="slide">
                                <NavSearch className={this.state.focused ? 'focused' : ''} onFocus={this.handleInputFocus} onBlur={this.handleInputBlur}>
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

    handleInputFocus() {
        this.setState({
            focused: true,
        })
    }

    handleInputBlur() {
        this.setState({
            focused: false,
        })
    }
}

export default Header;