import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import FormField from '../../components/form-field/FormField';
import FormButton from '../../components/form-button/FormButton';
import img from './images/login_logo.png';
import './style.css';
import PropTypes from "prop-types";
import signUp from "../../actions/users/signUp";
import Checkbox from "../../components/form-checkbox/Checkbox";

class SignUp extends React.Component {

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
            checkbox: {
                checked: false,
                status: "disabled"
            }
        };
    }

    isEmailValid(email = this.state.email.value) {
        let pattern = /^[\w-.]+@[\w-]+\.[a-z]{2,4}$/i;
        return pattern.test(email);
        //return email.length >= 3;
    }

    isPasswordValid(password = this.state.password.value) {
        return password.length >= 6;
    }

    onChangeEmail = (event, status = 'neutral') => {
        this.getCheckboxStatus();
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
        this.getCheckboxStatus();
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

    onCheckboxChange = (event) => {
        this.getCheckboxStatus(event.target.checked);
    }

    getCheckboxStatus(checked = this.state.checkbox.checked) {
        let status = this.isPasswordValid() && this.isEmailValid();
        if (status) {
            if (checked) status = 'checked';
            else status = 'available';
        }
        else status ='disabled'
        this.setState({
            checkbox: {
                status: status,
                checked: checked
            }
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.signup(this.state.email.value, this.state.password.value);
        this.setState({
            email: {
                value: this.state.email.value,
                status: 'neutral'
            },
            password: {
                value: '',
                status: 'neutral'
            },
            checkbox: {
                status: 'disabled',
                checked: false
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
                    className="form-signup"
                    onSubmit={this.onSubmit}>
                    <FormField value={this.state.email.value}
                               type="text"
                               className={`signup__field ${this.state.email.status}`}
                               placeholder="E-mail"
                               onChange={this.onChangeEmail}
                               onBlur={this.onBlurEmail}/>
                    <FormField value={this.state.password.value}
                               type="password"
                               className={`signup__field  ${this.state.password.status}`}
                               placeholder="Password"
                               onChange={this.onChangePassword}
                               onBlur={this.onBlurPassword}/>
                    <Checkbox className={`signup__checkbox ${this.state.checkbox.status}`}
                              checked={this.state.checkbox.checked}
                              text={"I agree to processing of personal data"}
                              disabled={this.state.checkbox.status === 'disabled'}
                              onChange={this.onCheckboxChange}/>
                    <FormButton className="signup__button"
                                type="submit"
                                value="Sign Up"
                                disabled={!this.isPasswordValid() || !this.isEmailValid() ||
                                    !this.state.checkbox.checked}/>
                </form>
                <div className="another-action">
                    <p className="another-action__text">Already have an account?</p>
                    <a href='/signin' className="another-action__link">Log in</a>
                </div>
            </React.Fragment>
        );
    }
}

SignUp.propTypes = {
    signup: PropTypes.func,
    authorized: PropTypes.bool,
    error: PropTypes.object,
    history: PropTypes.object
};

const mapStateToProps = (state) => ({
    authorized: state.usersReducer.authorized,
    error: state.usersReducer.error
});

const mapDispatchToProps = (dispatch) => ({
    signup: bindActionCreators(signUp, dispatch)

});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
//I agree to processing of personal data