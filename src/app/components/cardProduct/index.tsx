'use client'
import { JSX, useState } from "react";
import { Sbutton, Scard, ScontainerImg, Scontent, Slist } from './card.styled'
import { CardProps } from "@/utils/interface";
import { LiaEyeSolid } from "react-icons/lia";




export default function Card({ product }: CardProps): JSX.Element {

    const [changeImg, setChangeImg] = useState(true);


    return (
        <Scard>
            <Slist>
                {product.category.map((item, index) => (
                    <li key={`${item}-${index}`}>{item}</li>
                ))}
            </Slist>

            <ScontainerImg
                isHovered={changeImg}
                onMouseEnter={() => setChangeImg(!changeImg)}
                onMouseLeave={() => setChangeImg(true)}>
                {changeImg ? (
                    <img
                        src={product.thumbnail}
                        alt={product.altThumbnail}
                    />
                ) : (
                    <img
                        src={product.gallery[1].img}
                        alt={product.gallery[1].altImg}
                    />
                )}
            </ScontainerImg>

            <Scontent>
                <h1>{product.title}</h1>
                <p>{product.smallText}</p>
                <Sbutton>
                    <LiaEyeSolid />
                    Ver Produto
                </Sbutton>
            </Scontent>

        </Scard>
    )
}