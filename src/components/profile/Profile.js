import React from 'react';
import classes from './Profile.module.css';
import StatsItem from './StatsItem/StatsItem.js';
import PropTypes from 'prop-types';

const Profile = ({ user }) => {
  const { name, tag, location, avatar, stats } = user;
  return (
    <div className={classes.profile}>
      <div className={classes.description}>
        <img src={avatar} alt="user avatar" className={classes.avatar} />
        <p className={classes.name}>{name}</p>
        <p className={classes.tag}>@{tag}</p>
        <p className={classes.location}>{location}</p>
      </div>
      <ul className={classes.stats}>
        {Object.entries(stats).map(el => {
          return <StatsItem key={stats[el[0]]} el={el} />;
        })}
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  location: 'Unknown',
  name: 'Anonymous',
};
export default Profile;
Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string,
    stats: PropTypes.object,
  }),
};
