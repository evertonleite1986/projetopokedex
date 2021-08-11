import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function Card(props) {
    
    const [pokemon, setPokemon] = useState(props.info);

    const getData = useCallback(() => {
        fetch(props.info.url)
            .then(res => res.json())
            .then((result) => {
                setPokemon(result)
            })
    }, [props.info.url]);

    useEffect(() => {
        getData();
    }, [getData])

    let id = ('000' + pokemon.id).slice(-3); 
    
    return(
        <div className="app__card">
            <Link className="app__card__link" to={{pathname:"/info/" + id, state: pokemon }}>
                <img className="app__card__imagem" src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + id + ".png"} alt={pokemon.name} />
                <h4 className="app__card__id">{'#' + id}</h4>
                <h2 className="app__card__name">{pokemon.name}</h2>
            </Link>
        </div>
    )
}