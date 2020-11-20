import React from 'react';
import classes from './Statistics.module.css';
import Stat from './Stat/Stat.js';
import PropTypes from 'prop-types';

const Statistics = ({ data, title }) => {
  return (
    <section className={classes.statistics}>
      {title && <h2 className={classes.title}>{title}</h2>}
      <ul className={classes.statList}>
        {data.map(el => {
          return (
            <Stat key={el.id} label={el.label} percentage={el.percentage} />
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};
