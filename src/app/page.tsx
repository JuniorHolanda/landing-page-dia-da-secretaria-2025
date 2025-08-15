// 'use client'
import Card from "./components/cardProduct";
import Header from "./components/Header";
import { Shome } from "./page.styled";
import { Product } from "@/utils/interface";

export default async function Home() {

  const keywords = [
    'Bolsa Graci',
    'Bolsa Rss',
    'Bolsa Pst',
    'Bolsa Vita Clear',
    'Necessaire CN',
    'Necessaire EV'
  ];



  const res = await fetch('https://back-end-catalogo-miriam-momesso.onrender.com/product');
  const data: Product[] = await res.json();

  const filteredData = data.filter(item =>
    keywords.some(keyword => item.title.includes(keyword))
  );

  return (
    <Shome>
      <Header
        title="Dia da Secretária"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, perspiciatis ipsam aliquam consequatur cumque voluptate quia incidunt explicabo ab est temporibus exercitationem minus nemo molestias! Quis, laudantium? Quas, facere quasi."
      />
      <section>
        {
          filteredData.map((item) => (
            <Card key={item._id} product={item} />
          ))
        }
      </section>

    </Shome>
  );
}
