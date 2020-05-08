import React from 'react';
import { connect } from 'react-redux';

import Task from '../../components/task/Task';
import './style.css';
import getTasks from "../../actions/getTasks";
import {bindActionCreators} from "redux";
import PropTypes from "prop-types";

class Done extends React.Component {

    componentDidMount() {
        this.props.getTasks('done');
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
    tasks: PropTypes.array
};


const mapStateToProps = (state) => ({
    tasks: state.tasksReducer.tasks
});

const mapDispatchToProps = (dispatch) => ({
    getTasks: bindActionCreators(getTasks, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Done);

