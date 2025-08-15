'use client'
import styled from "styled-components";

export const Shome = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.gray300};
    height: auto;
    
    section{
        display: grid;
        grid-template: auto / repeat(3, 1fr);
        width: 70%;
        padding: ${({theme}) => theme.spacing.md} ${({theme}) => theme.spacing.xl};
        gap: ${({theme}) => theme.spacing.md};
        background-color: ${({theme}) => theme.colors.gray200};
    }
`;

