import React from 'react';

export const FriendList = ({friendData}) => {
  return (
    <div className="friend-list">
      <h2>My Friends</h2>
      <div>
        <h2>All My Friends</h2>
        <ul>
          {
            friendData.map(({first, last}) => (
              <li key={last}>{first} {last}</li>
            ))
          }
        </ul>
      </div>
      <div>My Best Friends</div>
      <div>Average Age of My Best Friends</div>
    </div>
  );
};
