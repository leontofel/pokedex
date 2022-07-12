import styled from "styled-components";
import { largeSize, mediumSize, primaryColor, secondaryColor, tertiaryColor } from "../../styles/variables";

const CardWrapper = styled.div`
    margin: 1rem;
    padding: 1rem;
    background-color: ${tertiaryColor};
    max-width: 15vw;
    max-height: 45vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 10px ${secondaryColor};
    border-radius: 5%;

    img{
        width: 90%;
        border: solid 5px #ccc;
        padding: 0;
        background-color: white;
    }
    h3 {
        font-size: calc(${largeSize} - 7px);
    }
`;

export { CardWrapper }