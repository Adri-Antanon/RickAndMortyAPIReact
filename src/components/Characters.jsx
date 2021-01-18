import { useEffect, useState } from 'react';

import '../assets/styles/styles.css';
import CharacterCard from './CharacterCard';


const RICK_AND_MORTY_API = 'https://rickandmortyapi.com/api/character/?page=2';

const Characters = () => {
    /**
     * Guardamos en una constante el enlace a la API pública que utilizaremos
     * IMPORTANTE: leer documentación https://rickandmortyapi.com/documentation
     *  */



    /**
     * Lógica de useState
     * constante donde internamente estructuramos los elementos que necesitamos
     * de useState y lo iniciamos como un array/arreglo vacío
     */

    const [characters, setCharacters] = useState([]);


    // useEffect llama a fetch, el cual obtiene la informacion de la api 
    useEffect(() => {
        fetch(RICK_AND_MORTY_API)
            .then(response => response.json())
            .then(data => setCharacters(data.results))
    }, []);

    return (

        // Iteramos por cada elemento
        <div className="Characters">
            {characters.map((character) => (
                <div>
                    <CharacterCard props={{ ...character }} key={character.id} />
                    <button type="button" > {character.id} </button>
                </div>

            ))}
        </div>
    );
}

export default Characters;