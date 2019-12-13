import React, { PureComponent } from 'react';
import { LoginWrapper, Logo, LoginBox, LoginTitleWrapper, LoginTitle, SignInContainer, SignInUserName, SignInPassword, RememberMe, LoginButton, MoreLoginOptions, OptionWrapper, OptionIcon } from './loginStyle';
import { connect } from 'react-redux';
import * as ActionCreaters from './store/ActionCreaters';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class Login extends PureComponent {
    render() {
        if (this.props.logined) {
            return <Redirect to='/' />
        } else {
            return (
                <LoginWrapper>
                    <Link to="/">
                        <Logo>Hanzhang</Logo>
                    </Link>
                    <LoginBox>
                        <LoginTitleWrapper>
                            <Link to="/login" style={{ textDecoration: 'none' }}>
                                <LoginTitle className='active'>Login</LoginTitle>
                            </Link>
                            <LoginTitle> | </LoginTitle>
                            <Link to="/login" style={{ textDecoration: 'none', color: '#969696' }}>
                                <LoginTitle>Sign Up</LoginTitle>
                            </Link>
                        </LoginTitleWrapper>
                        <SignInContainer>
                            <SignInUserName ref={(input) => { this.username = input }} />
                            <span className='fas fa-user'></span>
                            <SignInPassword type='password' ref={(input) => { this.password = input }} />
                            <span className='fas fa-lock'></span>
                            <RememberMe ref={(input) => this.remember = input} />
                            <span className='rememberMe'>Remember Me</span>
                            <LoginButton onClick={() => this.props.loginUser(this.username, this.password)}>Login</LoginButton>
                        </SignInContainer>
                        <MoreLoginOptions>
                            <h6>More Options</h6>
                            <OptionWrapper>
                                <Link to="">
                                    <OptionIcon className="devicon-facebook-plain colored" />
                                </Link>
                                <Link to="">
                                    <OptionIcon className="devicon-facebook-plain colored" />
                                </Link>
                                <Link to="">
                                    <OptionIcon className="devicon-facebook-plain colored" />
                                </Link>
                                <Link to="">
                                    <OptionIcon className="devicon-facebook-plain colored" />
                                </Link>
                            </OptionWrapper>
                        </MoreLoginOptions>
                    </LoginBox>
                </LoginWrapper >
            )
        }
    }
}

const mapStateToProps = (state) => ({
    logined: state.getIn(['login', 'logined']),
})

const mapDispatchToProps = (dispatch) => ({
    login(username, password) {
        dispatch(ActionCreaters.loginUser(username.value, password.value))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);