import styledComponents from "styled-components";

export const MainContainer = styledComponents.main`
    background-color: ${(props) => props.theme.colors.blue100};
    max-width: 1440px;
    min-height: 100vh;
    height: 100%;
    padding: 0 0 0 1.5rem;
    margin: 0 auto;     
    display: block;
    
    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: 1.5fr 1fr;
    }
`;
