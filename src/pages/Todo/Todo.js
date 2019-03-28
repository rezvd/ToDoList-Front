import React from 'react';
import { connect } from 'react-redux';

import Task from '../../components/task/Task';
import list from './list';
import './style.css';
import FormField from '../../components/form-field/FormField'
import FormButton from '../../components/form-button/FormButton'

//export default
class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            itemList: list.data,
            id: list.data.length + 1
        };
    }

    renderList = () => {
        return this.props.todos.map((item, index) => {
            return (
                <Task key={index} name={item.name} id={item.id} status="todo"/>
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
            itemList: [
                {
                    "id": this.state.id,
                    "name": this.state.value
                },
                ...this.state.itemList
            ],
            value: '',
            id: this.state.id + 1
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
};

const mapStateToProps = (state) => ({
    //todos: state.todoListReducer.todos,
    todos: list.data
});

export default connect(mapStateToProps, null)(Todo);

