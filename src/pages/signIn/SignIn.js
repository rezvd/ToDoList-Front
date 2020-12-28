import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { I18n } from "react-redux-i18n";
import { history as historyPropTypes } from 'history-prop-types';

import FormField from '../../components/form-field/FormField';
import FormButton from '../../components/form-button/FormButton';
import img from './images/login_logo.png';
import './style.css';
import signIn from "../../actions/users/signIn";

class SignIn extends React.Component {

    componentDidMount() {
        this.update();
    }

    componentDidUpdate() {
        this.update();
    }

    update() {
        if (this.props.authorized) {
            this.props.history.replace('/')
        }
        if (!!this.props.error && this.state.email.status === 'neutral') {
            this.setState({
                email: {
                    value: this.state.email.value,
                    status: 'invalid'
                },
                password: {
                    value: this.state.password.value,
                    status: 'invalid'
                }
            })
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            email: {
                value: '',
                status: 'neutral'
            },
            password: {
                value: '',
                status: 'neutral'
            },
        };
    }

    isEmailValid(email = this.state.email.value) {
        //let pattern = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
        //return pattern.test(email);
        return email.length >= 3;
    }

    isPasswordValid(password = this.state.password.value) {
        return password.length >= 6;
    }

    onChangeEmail = (event, status = 'neutral') => {
        this.setState({
            email: {
                status: status,
                value: event.target.value
            }
        });
    };

    onBlurEmail = (event) => {
        let status = this.isEmailValid(event.target.value) ? "valid" : "invalid";
        this.onChangeEmail(event, status)
    };

    onChangePassword = (event, status = 'neutral') => {
        this.setState({
            password: {
                status: status,
                value: event.target.value
            }
        });
    };

    onBlurPassword = (event) => {
        let status = this.isPasswordValid(event.target.value) ? "valid" : "invalid";
        this.onChangePassword(event, status)
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.signin(this.state.email.value, this.state.password.value);
        this.setState({
            email: {
                value: this.state.email.value,
                status: 'neutral'
            },
            password: {
                value: '',
                status: 'neutral'
            }
        });
    };

    render() {
        return (
            <React.Fragment>
                <div className='logo'>
                    <img src={img} alt="Eise tasks"/>
                </div>
                <form
                    className="form-login"
                    onSubmit={this.onSubmit}>
                    <FormField value={this.state.email.value}
                               type="text"
                               className={`login__field ${this.state.email.status}`}
                               placeholder={I18n.t('form.email')}
                               onChange={this.onChangeEmail}
                               onBlur={this.onBlurEmail}/>
                    <FormField value={this.state.password.value}
                               type="password"
                               className={`login__field  ${this.state.password.status}`}
                               placeholder={I18n.t('form.password')}
                               onChange={this.onChangePassword}
                               onBlur={this.onBlurPassword}/>
                    <FormButton className="login__button"
                                type="submit"
                                value={I18n.t('signin.button')}
                                disabled={!this.isPasswordValid() || !this.isEmailValid()}/>
                </form>
                <div className="another-action">
                    <p className="another-action__text">{I18n.t('signin.text')}</p>
                    <a href='/signup' className="another-action__link">{I18n.t('signin.link')}</a>
                </div>
            </React.Fragment>
        );
    }
}

SignIn.propTypes = {
    signin: PropTypes.func,
    authorized: PropTypes.bool,
    error: PropTypes.object,
    history: PropTypes.shape(historyPropTypes),
};

const mapStateToProps = (state) => ({
    authorized: state.usersReducer.authorized,
    error: state.usersReducer.error
});

const mapDispatchToProps = (dispatch) => ({
    signin: bindActionCreators(signIn, dispatch)

});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);