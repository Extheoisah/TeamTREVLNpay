import styledComponents from "styled-components";

export const Input = styledComponents.input`
    color: ${(props) => props.theme.colors.grey700};
    background-color: ${(props) => props.bg || "transparent"};
    font-family: ${(props) => props.theme.font.body};
    font-size: ${(props) => props.fontSize};
    padding: ${(props) => props.padding || "0.5rem 0.75rem"};
    border: ${(props) => props.theme.border.style};
    border-radius: ${(props) => props.theme.border.radius};
    width: 100%;
    margin-top: 8px;

    & ::placeholder {
        color: ${(props) => props.theme.colors.grey100};
        font-family: ${(props) => props.theme.font.body};
        font-size: ${(props) => props.fontSize || "0.85rem"};
        font-weight: 400;

        @media (min-width: 768px) {
            font-size: ${(props) => props.fontSize || "1rem"};
        }
    }
`