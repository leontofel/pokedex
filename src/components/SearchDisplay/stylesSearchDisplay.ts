import styled from "styled-components";
import { largeSize, mediumSize } from "../../styles/variables";

const SearchDisplayTitles = styled.section`

    width: 100vw;
    margin: 1rem;
    
    h3 {
        font-size: ${largeSize};
        margin: 1rem 0;
        span {
            font-weight: bold;
        }
    }
    p {
        font-size: calc(${mediumSize} + 5px);
        margin: 1rem 0;
    } 
    
`;

const RandomList = styled.section`

`;

export { SearchDisplayTitles, RandomList }