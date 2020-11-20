import React from 'react';
import PropTypes from 'prop-types';
import classes from '../Profile.module.css';

const StatsItem = ({ el: [key, value] }) => {
  return (
    <li className={classes.listItem}>
      <span className={classes.label}> {key} </span>
      <span className={classes.quantity}> {value} </span>
    </li>
  );
};

export default StatsItem;
StatsItem.propTypes = {
  el: PropTypes.array,
};
