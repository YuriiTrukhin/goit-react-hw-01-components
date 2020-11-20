import React from 'react';
import PropTypes from 'prop-types';
import classes from '../FriendList.module.css';

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <li className={classes.item}>
      {isOnline ? (
        <span className={classes.online}></span>
      ) : (
        <span className={classes.offline}></span>
      )}

      <img className={classes.avatarFriend} src={avatar} alt="" width="48" />
      <p className={classes.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
