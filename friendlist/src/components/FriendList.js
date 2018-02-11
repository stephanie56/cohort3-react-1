import React from 'react';
import { Card } from './Card';

export const FriendList = ({friendData}) => {
  const bestFriends = friendData.filter(friend => friend.isBestFriend);
  return (
    <div className="FriendList">
      <h2 className="FriendList__title">Facts About My Friends</h2>
      <div className="row">
        <Card title={"All My Friends"}
              data={friendData}
              showNumber={false}
              color={"Card--green"}
        />
        <Card title={"All My Best Friends"}
              data={bestFriends}
              showNumber={false}
              color={"Card--purple"}
        />
        <Card title={"Average Age of My Best Friends"}
              data={bestFriends}
              showNumber={true}
              color={"Card--pink"}
        />
      </div>
    </div>
  );
};
