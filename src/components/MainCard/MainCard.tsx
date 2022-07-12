import axios from "axios";
import { useEffect, useState } from "react";
import IPokemon from "../../types/IPokemon";
import Card from "../Card/Card";
import { MainCardContainer } from "./stylesMainCard";

export default function MainCard() {
    const defaultPokemon: IPokemon = {
        id: 0,
        name: "",
        base_experience: 0,
        forms: [],
        location_area_encounters: "",
    }
    const [pokemon, setPokemon] = useState(defaultPokemon);
    useEffect(() => {
        axios(`https://pokeapi.co/api/v2/pokemon/clefairy/`)
        .then(res => {
            setPokemon(res.data);
        });
    }, [])
    
    return (
        <section>
            <MainCardContainer>
                <h2> Pokemon Destaque do dia: </h2>
                <Card id={pokemon.id} name={pokemon.name} base_experience={pokemon.base_experience} forms={pokemon.forms} location_area_encounters={pokemon.location_area_encounters}  />
            </MainCardContainer>
        </section>
    );
}