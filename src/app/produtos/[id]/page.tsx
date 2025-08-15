import { Product } from "@/utils/interface";
import {
  Scontent,
  Sproduct,
  Swrapper,
  Slink
} from "./productPage.styled";
import Header from "@/app/components/Header";
import Gallery from "@/app/components/Gallery";

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = params;

  const res = await fetch(
    `https://back-end-catalogo-miriam-momesso.onrender.com/product/produto/${id}`
  );
  const data: Product = await res.json();

  const mensagem = `Olá, quero mais informações sobre o produto ${data.title}`;
  const mensagemEncoded = encodeURIComponent(mensagem);

  return (
    <Sproduct>
    <Header title="Produto" link={true} ></Header>
      <Swrapper>
        <Gallery product={data} />
        <Scontent>
          <h1>{data.title}</h1>
          <p>{data.text}</p>
          <div>
            {data.measure.map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
          <Slink href={`https://wa.me/551138070539?text=${mensagemEncoded}`}>
            Solicitar Orçamento
          </Slink>
        </Scontent>
      </Swrapper>
    </Sproduct>
  );
}
