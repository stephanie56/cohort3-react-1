import React from 'react';

const uuidv1 = require('uuid/v1');
const renderNames = list => list.map(({first, last}) => <li key={uuidv1()}>{first} {last}</li>);

export const Card = ({ title, data, color }) => {
  return (
    <div className={"Card " + color}>
      <h2>{ title }</h2>
      {
        typeof data === "number" ?
        (<h3>{ data }</h3>) :
        (<ul>{ renderNames(data) }</ul>)
      }
    </div>
  );
};
