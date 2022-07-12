import { HeaderWrapper } from "./stylesHeader";
import logo from '../../assets/img/pokeball7.png'
import SearchBar from "./SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function Header() {

    return(
        <nav>
            <HeaderWrapper>
                <Link to={'/'}>
                    <img src={logo} alt="Imagem do Logo" />
                </Link>
                    <h1>Poképedia</h1>
                <SearchBar />
                <ul>
                    <li>Login</li>
                    <li>Assine o Premium</li>
                    <li>Sobre Nós</li>
                </ul>
            </HeaderWrapper>
        </nav>
    );
}