// import css from './Notification.module.css';
// import PropTypes from 'prop-types';
// import React from 'react';

// const Notification = ({ message }) => {
//     return <p >{message}</p>
// };

// Notification.propTypes = {
//     message: PropTypes.string.isRequired,
// };

// export default Notification;



// ..................
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Notification extends Component {
  render() {
    const { message } = this.props;
    return <p>{message}</p>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;