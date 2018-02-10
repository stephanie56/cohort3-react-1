import React, { Component } from 'react';
const uuidv1 = require('uuid/v1');

export class FriendList extends Component {

  renderNames(list){
    return list.map(({first, last}) => (<li key={uuidv1()}>{first} {last}</li>));
  }

  calAvergeAge(list){
    const sumOfAges = list.reduce((acc, friend) => acc += friend.age, 0);
    return Math.round(sumOfAges / list.length);
  }

  render(){
    const allFriends = this.props.friendData;
    const bestFriends = allFriends.filter(friend => friend.isBestFriend);

    return (
      <div className="FriendList">
        <h2>Facts About My Friends</h2>
        <div className="row">
          <div className="col">
            <h2 className="FriendList__title">All My Friends</h2>
            <ul>{ this.renderNames(allFriends) }</ul>
          </div>
          <div className="col">
            <h2 className="FriendList__title">All My Best Friends</h2>
            <ul>{ this.renderNames(bestFriends) }</ul>
          </div>
          <div className="col"><h2 className="FriendList__title">Average Age of My Best Friend</h2>
          <h3>{ this.calAvergeAge(bestFriends) }</h3>
          </div>
        </div>
      </div>
    );
  }
}
