import React from 'react';

import { SearchBar } from './SearchBar';

export const Header = () => {
  return (
    <header className="Header">
      <h1>FriendList</h1>
      <SearchBar />
    </header>
  );
}
