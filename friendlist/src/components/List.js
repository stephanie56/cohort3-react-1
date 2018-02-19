import React from 'react';
import { Card } from './Card';

export const List = ({ allfriends, bestFriends, averageAge }) => {
  return (
    <div className="List">
      <h2>Facts About My Friends</h2>
      <div className="row">
        <Card title={"All My Friends"}
              data={allfriends}
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
  )
};
