

const CharacterCard = ({ props }) => {

    const { id, image, name, species, status, origin, gender } = props;

    return (
        <div className="Character-card" key={id}>
            <img src={image} alt={name} />
            <div className="Character-card-info">
                <h3>{name}</h3>
                <p>  <strong> Especie: </strong> {species} </p>
                <p>  <strong> Estado: </strong> {status} </p>
                <p>  <strong> Género: </strong> {gender} </p>
                <p>{origin.name === 'unknown' ? 'Lugar desconocido' : origin.name}</p>
            </div>
        </div>
    );
}

export default CharacterCard;