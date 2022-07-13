import styled from "styled-components";
import { largeSize } from "../../styles/variables";

const CardsDisplayWrapper = styled.section`
    width: 100vw;
    min-height: 70vh;
    
    margin-top: 5rem;
    
    justify-content: center;
    h2 {
        font-size: ${largeSize};
    }
    ul {
        display: flex;
        flex-wrap: wrap;
    }
    @media only screen and (max-width: 425px){
        overflow: scroll;
        max-height: 100vh;
        ul {
            justify-content: center;
            align-items: center;
        }
    }
    @media only screen and (max-width: 670px){
        overflow: scroll;
        max-height: 100vh;
        ul {
            justify-content: center;
            align-items: center;
        }
    }
    @media only screen and (max-width: 1200px){
        overflow: scroll;
        max-height: 100vh;
        ul {
            justify-content: center;
            align-items: center;
        }
    }
`;

const PageButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
    ol {
        display: flex;
        li {
            button {
                width: 6vw; 
                font-size: 1rem;
            }
        }
    }
`;

export { CardsDisplayWrapper, PageButtons }