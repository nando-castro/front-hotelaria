"use client";
import { useState } from "react";
import Cliente from "./pages/modules/visualiza/cliente/page";
import { Quarto } from "./pages/modules/visualiza/quarto/page";

export default function Home() {
  const [selected, setSelected] = useState("");
  let renderTab: any = {
    clientes: <Cliente />,
    quartos: <Quarto />,
    produtos: <div>Produtos</div>,
    relatorios: <div>Relatorios</div>,
    rendimentos: <div>Rendimentos</div>,
  };
  let currentTab: string = selected;
  return (
    <main className="h-screen w-full p-2 flex justify-center items-center bg-gradient-to-r from-blue-400  to-blue-600">
      <div className="w-full h-full flex flex-col bg-white md:shadow-2xl box-border md:rounded-2xl md:flex-none md:flex-row">
        <div className="md:w-28 md:h-full flex md:flex-col w-full h-28 flex-row md:overflow-hidden overflow-x-scroll">
          <div
            onClick={() => setSelected("clientes")}
            className="w-full h-full p-2 bg-gray-400 border hover:bg-gray-300 flex justify-center items-center cursor-pointer rounded-none md:rounded-tl-2xl md:h-1/4"
          >
            Clientes
          </div>
          <div
            onClick={() => setSelected("quartos")}
            className="w-full h-full p-2 bg-gray-400 border hover:bg-gray-300 flex justify-center items-center cursor-pointer md:h-1/4"
          >
            Quartos
          </div>
          <div
            onClick={() => setSelected("produtos")}
            className="w-full h-full p-2 bg-gray-400 border hover:bg-gray-300 flex justify-center items-center cursor-pointer md:h-1/4"
          >
            Produtos
          </div>
          <div
            onClick={() => setSelected("relatorios")}
            className="w-full h-full p-2 bg-gray-400 border hover:bg-gray-300 flex justify-center items-center cursor-pointer md:h-1/4"
          >
            Relatórios
          </div>
          <div
            onClick={() => setSelected("rendimentos")}
            className="w-full h-full p-2 bg-gray-400 border hover:bg-gray-300 flex justify-center items-center cursor-pointer rounded-none md:rounded-bl-2xl md:h-1/4"
          >
            Rendimentos
          </div>
        </div>
        <div className="w-full h-full bg-white rounded-r-lg">
          {currentTab !== "" ? renderTab[currentTab] : <div>Home</div>}
        </div>
      </div>
    </main>
  );
}
