import React from 'react';

import CharacterCard from './CharacterCard';

const FavoriteCharacters = ({ favorites, handleClickRemove }) => {

    return (
        <div style={{ marginBottom: 50 }}>
            <h2>Personajes favoritos </h2>
            <div className="Characters">
                {favorites.favorites.map(favorite =>
                    <CharacterCard {...favorite} isFavorite={true} handleClickRemove={handleClickRemove} />
                )}
            </div>
        </div>
    );
};

export default FavoriteCharacters;