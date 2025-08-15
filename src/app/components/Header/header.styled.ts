'use client'
import styled from "styled-components";

export const Swrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: fit fit-content;
    padding: ${({theme}) => theme.spacing.md};
    gap: ${({theme}) => theme.spacing.sm};
    background-color: ${({theme}) => theme.colors.primary};

    h1{
        font-size: ${({theme}) => theme.fontSizes.titleMedium};
        color: ${({theme}) => theme.colors.textLight}
    }

    p{
        font-size: ${({theme}) => theme.fontSizes.text};
        text-align: center;
        width: 50%;
    }
`