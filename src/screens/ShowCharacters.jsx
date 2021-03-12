import { useContext } from 'react';
import Characters from './Characters';

import ThemeContext from '../context/ThemeContext';

import '../assets/styles/button.css';

const ShowCharacters = () => {
    const color = useContext(ThemeContext);

    return (
        <div className="Header">
            <h1 style={{ color }} >Personajes de Rick and Morty</h1>
            <Characters />
        </div>
    );
}

export default ShowCharacters;