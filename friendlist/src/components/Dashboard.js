import React from 'react';
import { calAvergeAge } from '../utils/math';

import { List } from './List';

export const Dashboard = ({ filteredFriends, filteredBestFriends, bestFriends }) => {
  const averageAge = calAvergeAge(bestFriends);

  return (
    <div className="Dashboard">
      <List
        allfriends={filteredFriends}
        bestFriends={filteredBestFriends}
        averageAge={averageAge}
      />
    </div>
  );
};
