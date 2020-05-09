import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import Task from '../../components/task/Task';
import './style.css';
import FormField from '../../components/form-field/FormField';
import FormButton from '../../components/form-button/FormButton';
import getTasks from "../../actions/tasks/getTasks";
import createTask from "../../actions/tasks/createTask";
import PropTypes from "prop-types";
import whoami from "../../actions/users/whoami";

class Inbox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    componentDidMount() {
        this.checkAuth();
        this.props.whoami();
        this.props.getTasks("inbox");
    }

    componentDidUpdate() {
        this.checkAuth();
    }

    checkAuth() {
        console.log("authorized: " + this.props.authorized)
        if (!this.props.authorized) {
            this.props.history.replace('/signin')
        }
    }

    onChange = (event) => {
        this.setState({
            value: event.target.value
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.createTask(this.state.value)
        this.setState({
            value: ''
        })
    };

    renderList = () => {
        return this.props.tasks.map((item) => {
            return (
                <Task key={item.id} name={item.text} id={item.id} status="inbox"/>
            );
        });
    };

    render() {
        return (
            <React.Fragment>
                <form
                    className="form"
                    onSubmit={this.onSubmit}>
                    <FormField value={this.state.value}
                               className="form__field"
                               placeholder="Type your new task"
                               onChange={this.onChange}/>
                    <FormButton className="form__button"
                                type="submit"
                                value="Create"
                                disabled={this.state.value === ''}/>
                </form>
                {this.renderList()}
            </React.Fragment>
        );
    };
}

Inbox.propTypes = {
    tasks: PropTypes.array,
    getTasks: PropTypes.func,
    createTask: PropTypes.func,
    whoami: PropTypes.func,
    authorized: PropTypes.bool
};

const mapStateToProps = (state) => ({
    tasks: state.tasksReducer.tasks,
    authorized: state.usersReducer.authorized
});

const mapDispatchToProps = (dispatch) => ({
    getTasks: bindActionCreators(getTasks, dispatch),
    createTask: bindActionCreators(createTask, dispatch),
    whoami: bindActionCreators(whoami, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);

