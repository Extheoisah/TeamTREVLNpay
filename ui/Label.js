import styledComponents from "styled-components";

export const Label = styledComponents.label`
    color: ${(props) => props.theme.colors.blue700};
    font-size: ${(props) => props.fontSize || "0.75rem"};
    font-weight: ${(props) => props.fontWeight || "500"};
    // text-transform: capitalize;
    line-height: 24px;
`