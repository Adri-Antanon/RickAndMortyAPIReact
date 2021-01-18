import { useEffect, useState, useReducer } from 'react';

import CharacterCard from './CharacterCard';
import { favoriteReducer, initialState } from '../helpers';

import '../assets/styles/styles.css';
import ArrowLeft from '../assets/images/left-arrow.svg'
import ArrowRight from '../assets/images/right-arrow.svg'

const RICK_AND_MORTY_API = 'https://rickandmortyapi.com/api/character/';

const Characters = () => {

    const [characters, setCharacters] = useState([]);
    // Llamo otra vez a hooks para poder ir pasando de página
    const [page, setPage] = useState(1);

    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);


    // useEffect llama a fetch, el cual obtiene la informacion de la api, uso templateLiterals para pasar de página
    useEffect(() => {
        fetch(`${RICK_AND_MORTY_API}?page=${page}`)
            .then(response => response.json())
            .then(data => setCharacters(data.results))
    }, [page]);

    const handleClick = (favorite) => {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
    }

    const handleClickRemove = (id) => {
        dispatch({ type: 'REMOVE_FAVORITE', payload: id })
    }

    return (
        <div>
            {favorites.favorites.length > 0 &&
                <div>
                    <h2>Favoritos </h2>
                    <div className="Characters">
                        {favorites.favorites.map(favorite =>
                            <CharacterCard {...favorite} isFavorite={true} handleClickRemove={handleClickRemove} />
                        )}
                    </div>
                </div>
            }
            {page > 1 && <button style={{ marginTop: 100 }} type="button" onClick={() => setPage(page - 1)} > <img style={{ width: 75, height: 75 }} src={ArrowLeft} alt="arrow Left" /> </button>}
            {page < 33 && <button style={{ marginTop: 100 }} type="button" onClick={() => setPage(page + 1)} > <img style={{ width: 75, height: 75 }} src={ArrowRight} alt="arrow right" /> </button>}
            <div className="Characters" >
                {characters.map((character) => (
                    <div>
                        <CharacterCard {...character} key={character.id} handleClick={handleClick} />
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Characters;