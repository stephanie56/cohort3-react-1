import React, { Component } from 'react';

export class FriendList extends Component {
  constructor(props){
    super(props);
  }

  renderNames(list){
    return list.map(({first, last}) => (<li>{first} {last}</li>));
  }

  calAvergeAge(list){
    const sumOfAges = list.reduce((acc, friend) => acc += friend.age, 0);
    return Math.round(sumOfAges / list.length);
  }

  render(){
    const allFriends = this.props.friendData;
    const bestFriends = allFriends.filter(friend => friend.isBestFriend);

    return (
      <div className="friend-list">
        <h2>Facts About My Friends</h2>
        <div>
          <h2>All My Friends</h2>
          <ul>{ this.renderNames(allFriends) }</ul>
        </div>
        <div>
          <h2>All My Best Friends</h2>
          <ul>{ this.renderNames(bestFriends) }</ul>
        </div>
        <div><h2>The average age of my best friends is { this.calAvergeAge(bestFriends) }</h2></div>
      </div>
    );
  }
}
