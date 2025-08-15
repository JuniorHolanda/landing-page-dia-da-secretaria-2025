'use client'
import styled from "styled-components";
import Link from "next/link";

export const Shome = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.gray300};
    height: auto;

    section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${({theme}) => theme.colors.gray200};
        width: 70%;
        padding: ${({theme}) => theme.spacing.md} ${({theme}) => theme.spacing.xl};
        gap: ${({theme}) => theme.spacing.md};
    }
    
`;

export const ScontainerImg = styled.div`
    display: grid;
    grid-template: auto / repeat(3, 1fr);
    width: 100%;
    gap: ${({theme}) => theme.spacing.md};
`

export const Slink = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: ${({theme}) => theme.spacing.md};
    border-radius: ${({theme}) => theme.spacing.md};
    transition: all ease-in-out .5s;
    
    &:hover {
        background-color: ${({theme}) => theme.colors.primaryLight};
        color: ${({theme}) => theme.colors.textDark};       
    }
`
