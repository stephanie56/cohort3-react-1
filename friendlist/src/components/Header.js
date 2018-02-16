import React from 'react';

import { SearchBar } from './SearchBar';

export const Header = ({ searchFieldText, updateSearchTerm }) => {
  return (
    <header className="Header">
      <h1>FriendList</h1>
      <SearchBar
        searchFieldText={searchFieldText}
        updateSearchTerm={updateSearchTerm}
      />
    </header>
  );
}
