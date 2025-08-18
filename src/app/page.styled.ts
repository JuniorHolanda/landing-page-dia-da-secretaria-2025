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
        padding: ${({theme}) => theme.spacing.md} ${({theme}) => theme.spacing.lg};
        gap: ${({theme}) => theme.spacing.md};
        
        @media (max-width: ${({theme}) => theme.breakpoints.desktop}) {
            padding: ${({theme}) => theme.spacing.md} ${({theme}) => theme.spacing.md};
            width: 90%;
        }

        @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
            padding: ${({theme}) => theme.spacing.sm} ${({theme}) => theme.spacing.sm};
            width: 100%;
        }
    }
    
`;

export const ScontainerImg = styled.div`
    display: grid;
    grid-template: auto / repeat(3, 1fr);
    width: 100%;
    gap: ${({theme}) => theme.spacing.md};

    @media (max-width: ${({theme}) => theme.breakpoints.desktop}) {
        grid-template: auto / repeat(3, 1fr);
    }

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        grid-template: auto / repeat(2, 1fr);
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        grid-template: auto / repeat(1, 1fr);
    }
`

export const Slink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: ${({theme}) => theme.spacing.md};
    border-radius: ${({theme}) => theme.spacing.md};
    transition: all ease-in-out .5s;
    color: ${({theme}) => theme.colors.textLight}; 
    font-weight: 400;
    width: fit-content;
    font-size: ${({theme}) => theme.fontSizes.textMedium};
    gap: ${({theme}) => theme.spacing.md};
    
    &:hover {
        background-color: ${({theme}) => theme.colors.primaryLight};
        color: ${({theme}) => theme.colors.textDark};       
    }

    @media (max-width: ${({theme}) => theme.breakpoints.desktop}) {
        font-size: ${({theme}) => theme.fontSizes.titleSmall};
    }

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {

    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {

    }
`
