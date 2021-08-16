import React from 'react';

const Search = ({
  onSearch
}) => {
  return (
    <input
      placeholder="Search Product"
      onChange={onSearch}
      style={{ width: 500, height: 40, borderRadius: 10, borderWidth: 0.3, paddingLeft: 20 }}
    />
  )
}

export default Search