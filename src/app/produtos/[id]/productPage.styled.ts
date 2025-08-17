'use client'
import styled from "styled-components";
import Link from "next/link";

export const Sproduct = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: ${({theme}) => theme.colors.gray200};
`

export const Swrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 80%;
    background-color: ${({theme}) => theme.colors.gray100};
    padding: ${({theme}) => theme.spacing.lg};
    gap: ${({theme}) => theme.spacing.md};
`

export const Slink = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
    gap:  ${({theme}) => theme.spacing.sm};
    padding: ${({theme}) => theme.spacing.md};
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: ${({theme}) => theme.spacing.md} ;
    font-size:  ${({theme}) => theme.fontSizes.titleSmall};
`

export const Scontent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:  ${({theme}) => theme.spacing.md};
    width: 50%;
    height: auto;    
    
    h1{
        font-size:  ${({theme}) => theme.fontSizes.titleLarge};
        color:  ${({theme}) => theme.colors.textDark};
    }

        
    p{
        font-size:  ${({theme}) => theme.fontSizes.text};
        color:  ${({theme}) => theme.colors.textDark};
    }
    
    div{
        display: flex;
        gap:  ${({theme}) => theme.spacing.sm};
        
        span{
            background-color:  ${({theme}) => theme.colors.textDark};
            padding: ${({theme}) => theme.spacing.sm};
            border-radius: ${({theme}) => theme.spacing.md};;
            color:  ${({theme}) => theme.colors.textLight};
         }
    }
`