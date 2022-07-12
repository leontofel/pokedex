import axios from "axios";
import { useEffect } from "react";
import IPokemon from "../../types/IPokemon";
import Card from "../Card/Card";
import { CardsDisplayWrapper } from "./stylesCardsDisplay";

let array: IPokemon[] = [];
export default function CardsDisplay() {

    useEffect(() => {
        loadPokemon()
        
    }, [])

    async function loadPokemon() {
        for (let i = 1; i < 15; i++) {
            let response = await axios(`https://pokeapi.co/api/v2/pokemon/${i}/`)
                .then(res => {
                    array.push(res.data);
                });
                return response;
        }
    }

    return (
        <section>
            <CardsDisplayWrapper>
                <h2>Os primeiros Pokemons da Jornada Johto!</h2>
                {array.map((item: IPokemon) => {
                    return (
                        <Card id={item.id} name={item.name} base_experience={item.base_experience} forms={item.forms} location_area_encounters={item.location_area_encounters} />
                    );
                })}
            </CardsDisplayWrapper>
        </section>
    );
}