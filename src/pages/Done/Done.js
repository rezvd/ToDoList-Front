import React from 'react';

import Task from '../../components/task/Task';
import list from './list';
import './style.css';

export default class Home extends React.Component {
  renderList = () => {
    return list.data.map((item, index) => {
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
