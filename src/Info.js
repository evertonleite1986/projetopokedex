import {useState} from 'react';
import { Link } from 'react-router-dom';



export default function Info(props) {
    const [pokemon, setPokemon] = useState(props.location.state);

    let id = ('000' + pokemon.id).slice(-3);

    return(
        <div className="app__info">
            <div className="app__info__img">
            <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + id + ".png"} alt={pokemon.name}/>
            </div>
            <h2 className="app__info__h2">{pokemon.name}</h2>
            <div className="app__info__info">
            <h3 className="app__info__h3"><strong>Altura:</strong> {pokemon.height}</h3>
            <h3 className="app__info__h3"><strong>Peso:</strong> {pokemon.weight}</h3>
            </div>
            <div className="app__info__button">
            <button><Link to="/">Voltar</Link></button>
            </div>
        </div>
    )

}