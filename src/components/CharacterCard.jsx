

const CharacterCard = (props) => {

    const { id, name, status, species, gender, image, isFavorite, handleClick, handleClickRemove } = props;

    return (
        <div className="Character-card" key={id}>
            <img src={image} alt={name} />
            <div className="Character-card-info">
                <p>  <strong> Name: </strong> {name} </p>
                <p>  <strong> Status: </strong> {status} </p>
                <p>  <strong> Género: </strong> {gender} </p>
                <p>{origin.name === 'unknown' ? 'Lugar desconocido' : origin.name}</p>
                {!isFavorite ? <button
                    type="button"
                    onClick={() => handleClick({ id, name, status, species, gender, image })}
                >
                    Add
                </button>
                    :
                    <button
                        type="button"
                        onClick={() => handleClickRemove({ id })}
                    >
                        Remove
                </button>}
                {/* <button
                    type="button"
                    onClick={() => handleClick({ id, name, status, species, gender, image })}
                >
                    Add
                </button> */}
            </div>
        </div>
    );
}

export default CharacterCard;