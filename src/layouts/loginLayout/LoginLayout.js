import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class LoginLayout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main className='login'>
          <section className='login__content'>
            {this.props.children}
          </section>
        </main>
      </React.Fragment>
    );
  };
};

LoginLayout.propTypes = {
  children: PropTypes.node.isRequired
};
