// 'use client'
import Card from "./components/cardProduct";
import Header from "./components/Header";
import { ScontainerImg, Shome, Slink } from "./page.styled";
import { Product } from "@/utils/interface";

export default async function Home() {

  const keywords = [
    'Pasta Ibm Note',
    'Bag Mi',
    'Térmica AE Tri',
    'Mochila ADV',
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
        <ScontainerImg>
          {
            filteredData.map((item, index) => (
              <Card key={`${item._id}-${index}`} product={item} />
            ))
          }
        </ScontainerImg>

          <Slink href={'http://catalogo.miriammomesso.com.br'}>
            Acesse nosso Catálogo e veja mais brindes
          </Slink>

      </section>

    </Shome>
  );
}
