import React from "react";
import TabelaCliente from "./components/TabelaClientes/page";

export default function Cliente() {
  const dados = [
    {
      id: 1,
      nome: "Sam",
      cpf: "12345678910",
      dataCadastro: "2023/02/01",
      telefone: "123456789",
      email: "email",
      foto: "foto",
    },
    {
      id: 2,
      nome: "Fernando",
      cpf: "00011122233",
      dataCadastro: "2023/04/03",
      telefone: "123456789",
      email: "email",
      foto: "foto",
    },
    {
      id: 3,
      nome: "Lucas",
      cpf: "99988877766",
      dataCadastro: "2023/05/04",
      telefone: "123456789",
      email: "email",
      foto: "foto",
    },
  ];

  return (
    <div>
      <div>
        <TabelaCliente dados={dados} />
      </div>
    </div>
  );
}
