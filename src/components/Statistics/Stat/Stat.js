import React from 'react';
import PropTypes from 'prop-types';
import classes from '../Statistics.module.css';

const Stat = ({ label, percentage, backgroundColor }) => {
  let color = Math.floor(Math.random() * 256);
  let colorTwo = Math.floor(Math.random() * 256);
  let colorThree = Math.floor(Math.random() * 256);
  backgroundColor = `rgba( ${color} , ${colorTwo} , ${colorThree} )`;
  return (
    <li
      className={classes.item}
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <span className={classes.label}> {label} </span>
      <span className={classes.percentage}> {percentage} %</span>
    </li>
  );
};

export default Stat;
Stat.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
