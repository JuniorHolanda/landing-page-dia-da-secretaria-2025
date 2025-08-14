import { JSX } from "react";
import { Sbutton, Scard } from './card.styled'
import { CardProps } from "@/utils/interface";



export default function Card({product}: CardProps): JSX.Element {
    return(
        <Scard>
            {product.category.map((item, index)=>(
                <span key={`${item}-${index}`}>item</span>
            ))}
            <div>
                <img src={product.thumbnail} alt={product.altThumbnail} />
            </div>
            <div>
                <h1>{product.title}</h1>
                <p>{product.smallText}</p>
                <Sbutton>Ver Produto</Sbutton>
            </div>
            <h1>{product.title}</h1>
        </Scard>
    )
}