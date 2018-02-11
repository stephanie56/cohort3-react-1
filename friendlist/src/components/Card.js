import React, { Component } from 'react';

const uuidv1 = require('uuid/v1');

export class Card extends Component {
  renderNames(list){
    return list.map(({first, last}) => (<li key={uuidv1()}>{first} {last}</li>));
  }

  calAvergeAge(list){
    const sumOfAges = list.reduce((acc, friend) => acc += friend.age, 0);
    return Math.round(sumOfAges / list.length);
  }

  render(){
    const { title, data, showNumber, color } = this.props;
    return (
      <div className={"Card " + color}>
        <h2>{ title }</h2>
        {
          showNumber ?
          (<h3>{ this.calAvergeAge(data) }</h3>) :
          (<ul>{ this.renderNames(data) }</ul>)
        }
      </div>
    );
  }
}
