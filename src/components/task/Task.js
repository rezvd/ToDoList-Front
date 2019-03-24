import React from 'react';
import PropTypes from 'prop-types';

import ButtonMarkAsDone from "../button-mark-as-done/ButtonMarkAsDone"
import ButtonMarkAsTodo from "../button-mark-as-todo/ButtonMarkAsTodo"
import ButtonDelete from "../button-delete/ButtonDelete";
import ButtonEdit from "../button-edit/ButtonEdit";
import './style.css';

export default class Task extends React.Component {
  render() {
    return (
        <div className="task">
            <div className="task__left">
                {this.props.status === "todo" ? (<ButtonMarkAsDone/>) : null}
                {this.props.status === "done" ? (<ButtonMarkAsTodo/>) : null}
                <p className={"task__name"}>{this.props.name}</p>
            </div>
            <div className="task__right">
                {this.props.status === "todo" ? (<ButtonEdit/>) : null}
                <ButtonDelete/>
            </div>
        </div>
    );
  };
};

Task.propTypes = {
    name: PropTypes.string,
    status: PropTypes.string
};

Task.defaultProps = {
    name: '',
    status: 'todo'
};
