import React from 'react';

export const SearchBar = ({ searchFieldText, updateSearchTerm }) => {
  return (
    <div className="SearchBar">
      <input type="text"
      value={searchFieldText}
      onChange={updateSearchTerm}
      />
      <input type="button" value="Search" />
    </div>
  );
}
