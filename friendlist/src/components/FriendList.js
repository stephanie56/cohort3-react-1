import React from 'react';
import { friendData } from '../data/friends';

export class FriendList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      friendData
    };
  }
  render(){
    console.log(this.state.friendData);
    return (
      <div className="friend-list">
        <h2>My Friends</h2>
        <div>All My Friends</div>
        <div>My Best Friends</div>
        <div>Average Age of My Best Friends</div>
      </div>
    );
  }
}
