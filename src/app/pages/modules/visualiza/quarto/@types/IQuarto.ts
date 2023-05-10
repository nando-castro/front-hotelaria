export interface IQuarto {
    id: number | string;
    descricao: string;
    disponivel: boolean;
    foto: string;
    vagas: number;
    valor: number;
    dataCadastro: Date | string;
    categoria_quarto_id: number | string;
  }
  