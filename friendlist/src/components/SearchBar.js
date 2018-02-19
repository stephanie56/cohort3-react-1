import React from 'react';

const Search = ({onChangeFunc, onSubmitFunc, btnVal}) => {
  return (
    <div>
      <input
          type="text"
          onChange={onChangeFunc}
        />
      <button onClick={onSubmitFunc} >{ btnVal }</button>
    </div>
  );
};

export const SearchBar = ({ updateSearchTerm, submitSearchTerm }) => {
  return (
    <div className="SearchBar">
      <Search
        btnVal="Search in Friends"
        onChangeFunc={ (e) => updateSearchTerm(e, 'friendFilter') }
        onSubmitFunc={ () => submitSearchTerm('filteredFriends') }
      />
      <Search
        btnVal="Search in Best Friends"
        onChangeFunc={ (e) => updateSearchTerm(e, 'bestFriendFilter') }
        onSubmitFunc={ () => submitSearchTerm('filteredBestFriends') }
      />
    </div>
  );
};
