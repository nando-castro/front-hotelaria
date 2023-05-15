// "use client";
import React, { createContext, Dispatch, useContext, useState } from "react";

interface IClienteContext {
  cliente: IDadosCliente;
  setCliente: Dispatch<React.SetStateAction<IDadosCliente>>;
}

interface IDadosCliente {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
}

interface IChildren {
  children: React.ReactNode;
}

export const ClienteContext = createContext<IClienteContext>(
  {} as IClienteContext
);

export const ClienteProvider = ({ children }: IChildren) => {
  const [cliente, setCliente] = useState<IDadosCliente>({} as IDadosCliente);

  return <ClienteContext.Provider value={{ cliente, setCliente }}>{children}</ClienteContext.Provider>;
};

export const useCliente = () => useContext(ClienteContext);
