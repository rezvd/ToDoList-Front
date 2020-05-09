import React from 'react';
import { connect } from 'react-redux';

import Task from '../../components/task/Task';
import './style.css';
import getTasks from "../../actions/tasks/getTasks";
import {bindActionCreators} from "redux";
import PropTypes from "prop-types";
import whoami from "../../actions/users/whoami";

class Done extends React.Component {

    componentDidMount() {
        this.checkAuth();
        this.props.whoami();
        this.props.getTasks("done");
    }

    componentDidUpdate() {
        this.checkAuth();
    }

    checkAuth() {
        if (!this.props.authorized) {
            this.props.history.replace('/signin')
        }
    }

    renderList = () => {
        return this.props.tasks.map((item) => {
            return (
                <Task key={item.id} name={item.text} id={item.id} status="done"/>
            );
        });
    };

    render() {
        return (
            <React.Fragment>
                {this.renderList()}
            </React.Fragment>
        );
    };
}

Done.propTypes = {
    tasks: PropTypes.array,
    getTasks: PropTypes.func,
    whoami: PropTypes.func,
};

const mapStateToProps = (state) => ({
    tasks: state.tasksReducer.tasks,
    authorized: state.usersReducer.authorized
});

const mapDispatchToProps = (dispatch) => ({
    getTasks: bindActionCreators(getTasks, dispatch),
    whoami: bindActionCreators(whoami, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Done);

