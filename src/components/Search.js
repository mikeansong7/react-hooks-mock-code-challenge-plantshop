import React from "react";

function Search({search, setSearch}) {

  function updateSearch(event){
    setSearch(event.target.value)
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value= {search}
        placeholder="Type a name to search..."
        onChange={updateSearch}
      />
    </div>
  );
}

export default Search;
