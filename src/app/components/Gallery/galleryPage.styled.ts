'use client'

interface ActiveProps {
    isActive?: boolean;
}

import { theme } from "@/styles/theme";
import styled from "styled-components"

export const Sgallery = styled.div`
    display: flex;
    align-items: center;
    gap: ${({theme}) => theme.spacing.md};
    width: 50%;
    height: 100%;
`

export const ScontainerImgMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 100%;
    overflow: hidden;
    border: solid ${({theme}) => theme.colors.primary};
    border-radius: ${({theme}) => theme.spacing.sm};

    img{
        object-fit: cover;
        object-position: center;
        width: 100%;
    }
`

export const ScontainerSecondImg = styled.div<ActiveProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 20%;
    height: 100%;
    gap: ${({theme}) => theme.spacing.md};
`

 export const SImgGallery = styled.div<ActiveProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border: solid ${(props) => (props.isActive ? theme.colors.primary : theme.colors.gray200)};
    border-radius: ${({theme}) => theme.spacing.sm};
    cursor: pointer;

        img{
            object-fit: cover;
            object-position: center;
            width: 100%;
        }
`