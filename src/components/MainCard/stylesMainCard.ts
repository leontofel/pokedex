import styled from "styled-components";
import { largeSize } from "../../styles/variables";

const MainCardContainer = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   h2 {
    font-size: ${largeSize};
    
   }
    
`;

export { MainCardContainer }