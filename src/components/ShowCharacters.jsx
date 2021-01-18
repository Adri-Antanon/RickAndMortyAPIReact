import { useState, useContext } from 'react';
import Characters from './Characters';

import ThemeContext from '../context/ThemeContext';

import '../assets/styles/button.css';

const ShowCharacters = () => {

    const [showCharacters, setShowCharacters] = useState(false);

    const color = useContext(ThemeContext);


    const handleClick = () => {
        setShowCharacters(!showCharacters);
    }

    return (
        <div className="Header">
            <h1 style={{ color }} >Personajes de Rick and Morty</h1>

            <button className="big-button" type="button" onClick={handleClick} >{showCharacters ? 'Esconder' : 'Mostrar'} </button>

            {showCharacters && <Characters />}
            {!showCharacters && <p style={{ paddingTop: "2rem", color }} >¿Cuántos de ellos conocerás?</p>}

        </div>
    );
}

export default ShowCharacters;