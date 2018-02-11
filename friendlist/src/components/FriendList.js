import React, { Component } from 'react';
import { Card } from './Card';

export class FriendList extends Component {

  calAvergeAge(list){
    const sumOfAges = list.reduce((acc, friend) => acc += friend.age, 0);
    return Math.round(sumOfAges / list.length);
  }

  render(){
    const allFriends = this.props.friendData;
    const bestFriends = allFriends.filter(friend => friend.isBestFriend);

    return (
      <div className="FriendList">
        <h2 className="FriendList__title">Facts About My Friends</h2>
        <div className="row">
          <Card data={allFriends} title={"All My Friends"}/>
          <Card data={bestFriends} title={"All My Best Friends"}/>
          <Card stat={this.calAvergeAge(bestFriends)} title={"Average Age of My Best Friends"}/>
        </div>
      </div>
    );
  }
}
