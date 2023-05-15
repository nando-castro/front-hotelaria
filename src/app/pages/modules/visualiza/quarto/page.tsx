import React from "react";
import { TabelaQuartos } from "./components/TabelaQuartos/page";

const dados = [
  {
    id: 1,
    descricao: "string",
    disponivel: false,
    foto: "string",
    vagas: 2,
    valor: 10,
    dataCadastro: "2019/04/01",
    categoria_quarto_id: 1,
  },
  {
    id: 2,
    descricao: "string",
    disponivel: true,
    foto: "string",
    vagas: 2,
    valor: 10,
    dataCadastro: "2019/04/01",
    categoria_quarto_id: 1,
  },
];

export function Quarto() {
  return (
    <div>
      <div>
        <TabelaQuartos dados={dados} />
      </div>
    </div>
  );
}
