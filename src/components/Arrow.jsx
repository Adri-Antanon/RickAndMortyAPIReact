import React from 'react';

import ArrowLeft from '../assets/images/left-arrow.svg'
import ArrowRight from '../assets/images/right-arrow.svg'

const Arrow = ({ page, setPage }) => {

    return (
        <div>
            {page > 1 && <button type="button" onClick={() => setPage(page - 1)} > <img className="Arrow" src={ArrowLeft} alt="arrow Left" /> </button>}
            {page < 33 && <button type="button" onClick={() => setPage(page + 1)} > <img className="Arrow" src={ArrowRight} alt="arrow right" /> </button>}

        </div>
    );
};

export default Arrow;

