import { FooterContainer } from "./stylesFooter";
import logo from '../../assets/img/pokeball7.png';

export default function Footer() {
    return (
        <>
            <FooterContainer>
                <img src={logo} alt="Imagem do Logo Pokemon" />
                <h4>Poképedia</h4>
                <a href='https://github.com/leontofel'>
                    <p>© 2022 Leonardo Töfel</p>
                </a>
            </FooterContainer>
        </>
    );
}