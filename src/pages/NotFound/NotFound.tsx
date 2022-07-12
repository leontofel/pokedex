import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NotFound() {

    const NotFoundContainer = styled.div`
      text-align: center;
      font-size: 3rem;
      margin: 10rem 5rem;
    `;

    return (
        <main>
            <NotFoundContainer>
                <h1>A Página não foi encontrada! Erro 404</h1>
                <Link to='/'>Volte para o início</Link>
            </NotFoundContainer>
        </main>
    );
}