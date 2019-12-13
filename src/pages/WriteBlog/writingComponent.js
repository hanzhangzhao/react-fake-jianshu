import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as ActionCreaters from './store/ActionCreaters';
import { Redirect } from 'react-router-dom';

class WriteBlog extends PureComponent {
    render() {
        if (this.props.logined) {
            return <div>writing</div>
        } else {
            return (
                <Redirect to='/login' />
            )
        }
    }
}

const mapStateToProps = (state) => ({
    logined: state.getIn(['login', 'logined']),
})

const mapDispatchToProps = (dispatch) => ({
    login(username, password) {
        dispatch(ActionCreaters.login(username.value, password.value))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(WriteBlog);