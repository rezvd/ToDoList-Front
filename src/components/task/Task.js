import React from 'react';
import PropTypes from 'prop-types';

import ButtonMarkAsDone from "../button-mark-as-done/ButtonMarkAsDone"
import ButtonMarkAsInbox from "../button-mark-as-inbox/ButtonMarkAsInbox"
import ButtonDelete from "../button-delete/ButtonDelete";
import ButtonEdit from "../button-edit/ButtonEdit";
import './style.css';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import deleteTask from "../../actions/tasks/deleteTask";
import updateTask from "../../actions/tasks/updateTask";

class Task extends React.Component {

    handleDeleteClick() {
        this.props.deleteTask(this.props.id, this.props.status);
    }

    handleChangeStatusClick() {
        if (this.props.status === "inbox")
            this.props.updateTasks(this.props.id, 'done', this.props.status);
        if (this.props.status === "done")
            this.props.updateTasks(this.props.id, 'inbox', this.props.status);
    }

    render() {
        return (
            <div className="task">
                <div className="task__left">
                    {this.props.status === "inbox" ? (
                        <ButtonMarkAsDone id={this.props.id} className="task__button-change-status"
                                          onClick={() => this.handleChangeStatusClick()}/>) : null}
                    {this.props.status === "done" ? (
                        <ButtonMarkAsInbox id={this.props.id} className="task__button-change-status"
                                           onClick={() => this.handleChangeStatusClick()}/>) : null}
                    <p className={"task__name"}>{this.props.name}</p>
                </div>
                <div className="task__right">
                    {this.props.status === "inbox" ? (
                        <ButtonEdit id={this.props.id} className="task__button-action"/>) : null}
                    <ButtonDelete id={this.props.id} className="task__button-action"
                                  onClick={() => this.handleDeleteClick()}/>
                </div>
            </div>
        );
    }
}

Task.propTypes = {
    name: PropTypes.string,
    status: PropTypes.string,
    id: PropTypes.string,
    update: PropTypes.func,
    deleteTask: PropTypes.func,
    updateTasks: PropTypes.func
};

Task.defaultProps = {
    name: '',
    status: 'inbox',
    id: 1
};


const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
    deleteTask: bindActionCreators(deleteTask, dispatch),
    updateTasks: bindActionCreators(updateTask, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);


