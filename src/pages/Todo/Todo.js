import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import Task from '../../components/task/Task';
import './style.css';
import FormField from '../../components/form-field/FormField'
import FormButton from '../../components/form-button/FormButton'
import getTodoTasks from "../../actions/getTodoTasks";

class Todo extends React.Component {
    componentDidMount() {
        this.props.getTodoTasks();
    }

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            itemList: this.props.tasks,
            id: this.props.tasks.length + 1
        };
    }

    renderList = () => {
        return this.props.tasks.map((item) => {
            return (
                <Task key={item.id} name={item.name} id={item.id} status="todo"/>
            );
        });
    };

    onChange = (event) => {
        this.setState({
            value: event.target.value
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            value: ''
        })
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

const mapStateToProps = (state) => ({
    tasks: state.tasksReducer.tasks
});

const mapDispatchToProps = (dispatch) => ({
    getTodoTasks: bindActionCreators(getTodoTasks, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

