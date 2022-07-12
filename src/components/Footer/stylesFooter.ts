import styled from "styled-components";
import { backgroundColor, largeSize, mediumSize, tertiaryColor } from "../../styles/variables";

const FooterContainer = styled.footer`
    color: white;
    background: #06283D;
    width: 100vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    img {
        width: 15vw;
        height: 25vh;
        margin: 1rem;
    }
    h4 {
        font-size: ${largeSize};
    }
    p, a {
        text-decoration: none;
        color: inherit;
        margin: 1rem;
        &:hover {
            transition: .5s;
            color: ${backgroundColor};
        }
    }
`;

export { FooterContainer }