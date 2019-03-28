import React from 'react';
import { connect } from 'react-redux';

import Task from '../../components/task/Task';
import list from './list';
import './style.css';

class Done extends React.Component {
    renderList = () => {
        return this.props.done.map((item, index) => {
            return (
                <Task key={index} name={item.name} id={item.id} status="done"/>
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
    //done: state.doneListReducer.done,
    done: list.data
});

export default connect(mapStateToProps, null)(Done);

