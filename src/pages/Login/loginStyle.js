import styled from 'styled-components';

export const LoginWrapper = styled.div`
    height: 100%;
    min-height: 750px;
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1;
`;

export const Logo = styled.div`
    position: absolute;
    top: 46px;
    margin-left: 50px;
    color: #ea6f5a;
    font-size: 40px;
`;

export const LoginBox = styled.div`
    width: 400px;
    margin: 70px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    display: inline-block;
    box-sizing: border-box;
`;

export const LoginTitleWrapper = styled.div`
    margin: 0 auto 50px;
    font-weight: 400;
    color: #969696;
`;

export const LoginTitle = styled.span`
    padding: 10px;
    font-size: 18px;
    &.active {
        font-weight: 700;
        color: #ea6f5a;
        border-bottom: 2px solid #ea6f5a;
    }
`;

export const SignInContainer = styled.div`
    position: relative;
    margin-bottom: 30px;
    .fa-user {
        position: absolute;
        top: 16px;
        left: 12px;
        font-size: 16px;
        color: #969696;
    }
    .fa-lock {
        position: absolute;
        top: 66px;
        left: 12px;
        font-size: 16px;
        color: #969696;
    }
    .rememberMe {
        float: left;
        margin: 15px 10px;
        font-size: 14px;
        color: #969696;
    }
`;

export const SignInUserName = styled.input.attrs({
    placeholder: 'Username'
})`
    width: 100%;
    height: 50px;
    margin-bottom: 0;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    border-bottom: none;
    border-radius: 4px 4px 0 0;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
    box-sizing: border-box;
`;

export const SignInPassword = styled.input.attrs({
    placeholder: 'Password'
})`
    width: 100%;
    height: 50px;
    margin-bottom: 0;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
    box-sizing: border-box;
`;

export const RememberMe = styled.input.attrs({
    type: 'checkbox',
    
})`
    float: left;
    margin: 15px 0;
`;

export const LoginButton = styled.button`
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #3194d0;
    cursor: pointer;
    outline: none;
    display: block;
    &:hover {
        background: #187cb7;
    }
`;

export const MoreLoginOptions = styled.span`
    margin-top: 50px;
    position: relative;
    font-size: 12px;
    color: #b5b5b5;
    h6::before {
        content: "";
        border-top: 1px solid #b5b5b5;
        display: block;
        position: absolute;
        width: 60px;
        top: 5px;
        right: 65px;
    }
    h6::after {
        content: "";
        border-top: 1px solid #b5b5b5;
        display: block;
        position: absolute;
        width: 60px;
        top: 5px;
        left: 65px;
    }
`;

export const OptionWrapper = styled.ul`
    margin-bottom: 10px;
    list-style: none;
`;

export const OptionIcon = styled.li`
    margin: 0 5px;
    display: inline-block;
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 32px;
`;