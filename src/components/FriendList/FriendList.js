import React from 'react';
import FriendListItem from './List/FriendListItem.js';
import classes from '../FriendList/FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className={classes.friendList}>
      {friends.map(el => {
        return (
          <FriendListItem
            key={el.id}
            isOnline={el.isOnline}
            avatar={el.avatar}
            name={el.name}
          />
        );
      })}
    </ul>
  );
};
export default FriendList;
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
