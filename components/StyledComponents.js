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
        grid-template-columns: 1.65fr 1fr;
    }
`;

export const SelectInput = styledComponents.form`
    // border: 1px solid red;
    position: relative;
    
    .select{
        border-left: none;
        border-top: none;
        border-bottom: none;
        position: absolute;
        bottom: 0%;
        // transform: translateY(-50%);
    }
`;
