import styled from "styled-components";


export const Scard = styled.article`
    display: flex;
    width: 400px;
    height: 600px;
    background-color: red;
`;

export const Sbutton = styled.button`
    display: flex;
    padding: ${({theme}) => theme.spacing.md};
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.gray100};
`;