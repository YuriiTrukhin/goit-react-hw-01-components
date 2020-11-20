import React from 'react';
import Profile from './components/profile/Profile.js';
import user from './data/user.json';

import Statistics from './components/Statistics/Statistics.js';
import dataStatistic from './data/Statistical.json';

import FriendList from './components/FriendList/FriendList.js';
import friends from './data/friends.json';

import TransactionHistory from './components/transactions/TransactionHistory.js';
import transactions from './data/transactions.json';

const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics data={dataStatistic} title={'Upload stats'} />
      <FriendList friends={friends} />
      <TransactionHistory key = {transactions}items={transactions} />
    </>
  );
};
export default App;
