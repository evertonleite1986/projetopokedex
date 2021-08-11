import { useEffect, useState } from 'react';
import Card from './Card';

export default function CardList() {
    const [pokemons, setPokemons] = useState([]);

    const getData = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
            .then( res => res.json())
            .then( (result) => {
            setPokemons(result.results)
        })
    }

    useEffect(() => {
        getData();
    },[]);

    return(
        <>
            <div className="app__list">
                {
                    (
                        pokemons.map((item) => (
                        <Card key={item.name} info={item}></Card>
                    ))
                    )
                }

            </div>
        </>
    )
     
}