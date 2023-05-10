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
    disponivel: false,
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
      <div className="bg-green-600 w-48 p-4 m-4 flex items-center justify-center rounded font-bold text-white cursor-pointer hover:bg-green-400 hover:text-black">
        Cadastrar quarto
      </div>
      <div>
        <TabelaQuartos dados={dados} />
      </div>
    </div>
  );
}
