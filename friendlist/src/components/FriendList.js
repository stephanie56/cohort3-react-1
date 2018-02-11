import React from 'react';
import { Card } from './Card';
import { calAvergeAge } from '../utils/math';

export const FriendList = ({ friendData }) => {
  const bestFriends = friendData.filter(friend => friend.isBestFriend);
  const averageAge = calAvergeAge(bestFriends);

  return (
    <div className="FriendList">
      <h2>Facts About My Friends</h2>
      <div className="row">
        <Card title={"All My Friends"}
              data={friendData}
              color={"Card--green"}
        />
        <Card title={"All My Best Friends"}
              data={bestFriends}
              color={"Card--purple"}
        />
        <Card title={"Average Age of My Best Friends"}
              data={averageAge}
              color={"Card--pink"}
        />
      </div>
    </div>
  );
};
