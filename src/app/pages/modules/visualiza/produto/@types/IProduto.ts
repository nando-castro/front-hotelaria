export interface IProduto {
  id: number;
  descricao: string;
  categoria_produto_id: number;
  foto: string;
  estoque: number;
  valor: number;
  marca: string;
  dataCadastro: string | Date;
}
