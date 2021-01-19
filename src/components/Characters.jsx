import { useEffect, useState, useReducer, useMemo, useRef, useCallback } from 'react';

import CharacterCard from './CharacterCard';
import SearchCharacters from './SearchCharacters';
import { favoriteReducer, initialState } from '../helpers';
import Arrow from './Arrow';

import '../assets/styles/styles.css';
import FavoriteCharacters from './FavoriteCharacters';

const RICK_AND_MORTY_API = 'https://rickandmortyapi.com/api/character/';

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [search, setSearch] = useState('');
    const searchInput = useRef(null);


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

    // Ahora lo hacemos con useCallback
    // const handleSearch = () => {
    //     setSearch(searchInput.current.value);
    // }

    const handleSearch = useCallback(() => {
        setSearch(searchInput.current.value);
    }, [])
    // El segundo parámetro hace referencia al elemento que va a escuchar, y solo va a hacer un cambio de la referencia cuando el elemento cambie


    // Esta función sirve para filtrar los personajes, se puede realizar más optima con useMemo
    // const filteredUsers = characters.filter((user) => {
    //     return user.name.toLowerCase().includes(search.toLowerCase());
    // })

    const filteredUsers = useMemo(() =>
        characters.filter((user) => {
            return user.name.toLowerCase().includes(search.toLowerCase());
        }),
        [characters, search]
    );
    // Con esto lo que hace es escuchar los elementos que cambiarán, y cuando cambien los personajes o cambie search, va a recordar el valor, optimizando el uso de memoria

    return (
        <div>
            {favorites.favorites.length > 0 ?
                <FavoriteCharacters favorites={favorites} handleClickRemove={handleClickRemove} />
                :
                <h3>No hay personajes favoritos...</h3>
            }

            <Arrow page={page} setPage={setPage} />

            <SearchCharacters search={search} searchInput={searchInput} handleSearch={handleSearch} />

            <div className="Characters" >
                {filteredUsers.map((character) => (
                    <div>
                        <CharacterCard {...character} key={character.id} handleClick={handleClick} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Characters;