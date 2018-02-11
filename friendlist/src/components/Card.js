import React, { Component } from 'react';

const uuidv1 = require('uuid/v1');

export class Card extends Component {

  renderNames(list){
    return list.map(({first, last}) => (<li key={uuidv1()}>{first} {last}</li>));
  }

  render(){
    return (
      <div className="Card Card--purple">
        <h2>{ this.props.title }</h2>
        <ul>{ this.renderNames(this.props.data || []) }</ul>
        <h3>{ this.props.stat }</h3>
      </div>
    );
  }
}
