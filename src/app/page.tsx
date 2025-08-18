// 'use client'
import Card from "./components/cardProduct";
import Header from "./components/Header";
import Slider from "./components/Slider";
import { ScontainerImg, Shome, Slink } from "./page.styled";
import { Product } from "@/utils/interface";
import sliderProduct from "@/app/data/slides.json"
import { GoBook } from "react-icons/go";


export default async function Home() {

  const keywords = [
    'Pasta Ibm Note',
    'Bag Mi',
    'Térmica AE Tri',
    'Mochila Adv G',
    'Pasta Sinc',
    'Caixa de Som bluetooth',
    'Térmica JL',
    'Necessaire CN',
    'Kit Higiene Bucal'
  ];



  const res = await fetch('https://back-end-catalogo-miriam-momesso.onrender.com/product');
  const data: Product[] = await res.json();

  const filteredData = data.filter(item =>
    keywords.some(keyword => item.title.includes(keyword))
  );

  return (
    <Shome>
      <Header
        title="Dia dos Professores"
        text="Nossas sugestões de brindes para celebrar o Dia dos Professores."
      />
      <section>
        <Slider slides={sliderProduct} />
        <ScontainerImg>
          {
            filteredData.map((item, index) => (
              <Card key={`${item._id}-${index}`} product={item} />
            ))
          }
        </ScontainerImg>

        <Slink rel="noopener noreferrer" target="_blank" href={'http://catalogo.miriammomesso.com.br'}>
          <GoBook />
          Mais opções acessei nosso catálogo
        </Slink>
      </section>
    </Shome>
  );
}
