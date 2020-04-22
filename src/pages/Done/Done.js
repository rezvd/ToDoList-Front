import React from 'react';
import { connect } from 'react-redux';

import Task from '../../components/task/Task';
import './style.css';
import getDoneTasks from "../../actions/getDoneTasks";
import {bindActionCreators} from "redux";

class Done extends React.Component {

    componentDidMount() {
        this.props.getDoneTasks();
    }

    renderList = () => {
        return this.props.tasks.map((item) => {
            return (
                <Task key={item.id} name={item.name} id={item.id} status="done"/>
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
};


const mapStateToProps = (state) => ({
    tasks: state.tasksReducer.tasks
});

const mapDispatchToProps = (dispatch) => ({
    getDoneTasks: bindActionCreators(getDoneTasks, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Done);

