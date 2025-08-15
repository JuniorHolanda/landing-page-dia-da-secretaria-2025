import { JSX } from "react";
import { Swrapper } from "./header.styled";
import Link from "next/link";


interface Props {
    title: string;
    text?: string;
    link?: boolean;
}

export default function Header ({title, text, link}: Props): JSX.Element {
    return (
        <Swrapper>
            <img src="/logo-secundario-branco.png" alt="logo miriam momesso" />
            <h1>{title}</h1>
            <p>{text}</p>
            {
                link && <Link href={'/'}>Início</Link>
            }
        </Swrapper>
    )
}