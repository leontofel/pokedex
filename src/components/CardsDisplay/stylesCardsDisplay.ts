import styled from "styled-components";
import { largeSize } from "../../styles/variables";

const CardsDisplayWrapper = styled.section`
    width: 100vw;
    min-height: 70vh;
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    h2 {
        font-size: ${largeSize};
    }
`;

export { CardsDisplayWrapper }