import styled from "styled-components";
import { largeSize, primaryColor } from "../../styles/variables";

const HeaderWrapper = styled.nav`
    color: white;
    background-color: ${primaryColor};
    
    width: 100vw;
    height: 30vh;
    display: flex;
    justify-content: space-between;
    h1 {
        font-size: ${largeSize};
        align-self: center;
    }
    img {
        max-width: 15vw;
        max-height: 28vh;
    }
    ul {
        margin: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        li {
            margin: 1rem;
            &:hover {
                cursor: pointer;
                text-decoration: underline;
                color: black;
                transition: .5s;
            }
        }
    }
    @media only screen and (max-width: 425px){
        height: 40vh;
        justify-content: center;
        
    }
    @media only screen and (max-width: 670px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 40vh;
    }
    @media only screen and (max-width: 1200px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 50vh;
    }

`;

export { HeaderWrapper }