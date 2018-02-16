import React from 'react';
import { calAvergeAge } from '../utils/math';

import { List } from './List';

export const Dashboard = ({ data, searchFieldText }) => {
  const bestFriends = data.filter(friend => friend.isBestFriend);
  const averageAge = calAvergeAge(bestFriends);

  return (
    <div className="Dashboard">
      <List
        allfriends={data}
        bestFriends={bestFriends}
        averageAge={averageAge}
        searchFieldText={searchFieldText}
      />
    </div>
  );
};
