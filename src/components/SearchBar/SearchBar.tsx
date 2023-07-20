import React from 'react'
import '../SearchBar/styles.css'

function SearchBar() {
  return (
    <>
    <div className="main--searcher">

      <div className="main-searcher__input-container search-container">

        <p className='main--searcher__ico'>
          <i className="fa-solid fa-magnifying-glass"></i>
        </p>

        <input type="text" id="search-input" placeholder=" ¿Qué necesita tu mascota? "/>

        <ul id="suggestions-list"></ul>
        
      </div>

    </div>
    
    </>
  )
}

export default SearchBar