import { JSX } from "react";
import { Swrapper } from "./header.styled";


interface Props {
    title: string;
    text?: string;
}

export default function Header ({title, text}: Props): JSX.Element {
    return (
        <Swrapper>
            <h1>{title}</h1>
            <p>{text}</p>
        </Swrapper>
        
    )
}