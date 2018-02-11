import React from 'react';

import { List } from './List';

export const Dashboard = ({ lists }) => {

  return (
    <div className="Dashboard">
      {
        lists.map(list => <List title={list.name} data={list.data} />)
      }
    </div>
  );
};
