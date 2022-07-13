import IPokemon from "../../types/IPokemon";
import { CardWrapper } from "./stylesCard";

export default function Card({ id, name, base_experience, forms, location_area_encounters }: IPokemon) {

    return (
        <>
            <CardWrapper key={Math.floor(Math.random() * 10000)}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="Imagem do Pokemon principal" />
                <h3>Nome: {name}</h3>
                <p>XP ganho: {base_experience}</p>
                <a href={location_area_encounters}>Onde encontrar</a>
                <p>Formas: </p>
                <ul>
                    {forms.map((item: { url: string, name: string }) => {
                        return (
                            <a href={item.url}>
                                <li key={Math.floor(Math.random() * 1000)}>
                                    {item.name}
                                </li>
                            </a>
                        );
                    })}
                </ul>
            </CardWrapper>
        </>
    );
}