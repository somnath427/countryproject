import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function SearchBar() {
  return (
    <>
<div className="search-container">
<FontAwesomeIcon icon={faSearch} className="a" />
<input type="text" pleaceholder ='search for a country...'/>

</div>
    </>
  )
}

export default SearchBar