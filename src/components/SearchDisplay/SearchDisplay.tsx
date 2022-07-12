import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { currentSearch } from "../../state/atom";
import IPokemon from "../../types/IPokemon";
import Card from "../Card/Card";
import { RandomList, SearchDisplayTitles } from "./stylesSearchDisplay";

export default function Search() {

    const defaultPokemon: IPokemon = {
        id: 0,
        name: "",
        base_experience: 0,
        forms: [],
        location_area_encounters: "",
    }
    const resultSearch = useRecoilValue(currentSearch);

    const [pokemon, setPokemon] = useState(defaultPokemon);

    useEffect(() => {
        axios(`https://pokeapi.co/api/v2/pokemon/${resultSearch}/`)
            .then(res => {
                setPokemon(res.data);
            });
   
    }, [])

  

    return (
        <>
            <SearchDisplayTitles>
                <h3> Exibindo resultados para <span>{resultSearch} </span></h3>
                <p>Para pesquisar novamente, clique na pokebola</p>
                <hr></hr>

                <h3>RESULTADOS:</h3>
            </SearchDisplayTitles>
            {pokemon.id !== 0 ?
                <Card id={pokemon.id} name={pokemon.name} base_experience={pokemon.base_experience} forms={pokemon.forms} location_area_encounters={pokemon.location_area_encounters} />
                : <h2>Desculpe, não encontramos o nome selecionado, por favor tente novamente</h2>}

            <SearchDisplayTitles>
                <h2>Dá uma olhada nesses outros pokemons:</h2>
            </SearchDisplayTitles>
            <RandomList>
                {/*<ul>
                    {array.map((item: IPokemon) => {
                        return (
                            <li><Card id={item.id} name={item.name} base_experience={item.base_experience} forms={item.forms} location_area_encounters={item.location_area_encounters} /></li>
                        );
                    })}
                </ul> */}

            </RandomList>



        </>
    );
}