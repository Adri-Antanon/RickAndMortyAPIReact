import React from 'react';

const SearchCharacters = ({ search, searchInput, handleSearch }) => {

    return (
        <div className="Search" style={{ marginTop: 50 }}>
            <h2>Buscador de personajes</h2>
            <input ref={searchInput} type="text" value={search} onChange={handleSearch} placeholder="Personajes de la página" />
        </div>
    );
};

export default SearchCharacters;