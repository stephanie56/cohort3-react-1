import React from 'react';

import { SearchBar } from './SearchBar';

export const Header = ({ searchFieldText, submitSearchTerm }) => {
  return (
    <header className="Header">
      <h1>FriendList</h1>
      <SearchBar
        submitSearchTerm={submitSearchTerm}
      />
    </header>
  );
}
