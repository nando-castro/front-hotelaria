import Tabelaproduto from "./components/TabelaProdutos/page";

export default function Produto() {
  const dados = [
    {
      id: 1,
      descricao: "Produto 1",
      categoria_produto_id: 1,
      foto: "string",
      estoque: 12,
      valor: 2.5,
      marca: "marca 1",
      dataCadastro: "2023/02/01",
    },
    {
      id: 2,
      descricao: "Produto 2",
      categoria_produto_id: 1,
      foto: "foto",
      estoque: 20,
      valor: 4.5,
      marca: "marca 2",
      dataCadastro: "2023/02/01",
    },
  ];

  return (
    <div>
      <div>
        <Tabelaproduto dados={dados} />
      </div>
    </div>
  );
}
