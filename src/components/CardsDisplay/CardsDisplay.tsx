import axios from "axios";
import { useEffect, useState } from "react";
import IPokemon from "../../types/IPokemon";
import Card from "../Card/Card";
import { CardsDisplayWrapper, PageButtons } from "./stylesCardsDisplay";

let array: IPokemon[] = [];
export default function CardsDisplay() {

    let numberOfPokemons = 1;

    const defaultPokemonArray: IPokemon[] = [];
    const [pokemonArray, setPokemonArray] = useState(defaultPokemonArray)
    useEffect(() => {
        for (let i = numberOfPokemons; i < numberOfPokemons + 20; i++) {
            axios(`https://pokeapi.co/api/v2/pokemon/${i}/`)
                .then(res => {
                    array.push(res.data);
                });
        }
        setPokemonArray(array);
    }, [numberOfPokemons, pokemonArray])


    function handlePage(page: number | string) {
        switch (page) {
            case 1:
                numberOfPokemons = 1;
                break;
            case 2:
                numberOfPokemons = 15;
                break;
            case 3:
                numberOfPokemons = 30;
                break;
            case '<':
                numberOfPokemons -= 15;
                break;
            case '>':
                numberOfPokemons += 15;
                break;
        }
    }

    return (
        <section>
            <CardsDisplayWrapper>
                <h2>Os primeiros Pokemons da Jornada Johto!</h2>
                <ul>
                    {pokemonArray.map((item: IPokemon) => {
                        return (
                            <li>
                                <Card id={item.id} name={item.name} base_experience={item.base_experience} forms={item.forms} location_area_encounters={item.location_area_encounters} />
                            </li>
                        );
                    })}
                </ul>
            </CardsDisplayWrapper>
            <PageButtons>
                <ol>
                    <li><button onClick={() => handlePage('<')}>{'<'}</button></li>
                    <li><button onClick={() => handlePage(1)}>1</button></li>
                    <li><button onClick={() => handlePage(2)}>2</button> </li>
                    <li><button onClick={() => handlePage(3)}>3</button></li>
                    <li><button onClick={() => handlePage('>')}>{'>'}</button></li>
                </ol>
            </PageButtons>

        </section>
    );
}