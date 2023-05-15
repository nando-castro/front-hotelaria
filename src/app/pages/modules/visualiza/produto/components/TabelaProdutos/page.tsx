import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { IProduto } from "../../@types/IProduto";
import CadastrarProduto from "../ModalCadastrarProduto/page";
import EditarProduto from "../ModalEditarProduto/page";

interface TableProps {
  dados: IProduto[];
}

export default function Tabelaproduto({ dados }: TableProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [editarProduto, setEditarProduto] = useState<IProduto>();
  const [cadastrarProduto, setCadastrarProduto] = useState<IProduto>({} as IProduto);
  const [dataSource, setDataSource] = useState<IProduto[]>(dados);
  const [modalEditar, setModalEditar] = useState<boolean>(false);
  const [modalCadastrar, setModalCadastrar] = useState<boolean>(false);
  const columnsRegistro: ColumnsType<IProduto> = [
    {
      key: "1",
      title: "Descrição",
      render: (record: IProduto) => <> {record.descricao} </>,
    },
    {
      key: "2",
      title: "Marca",
      render: (record: IProduto) => <>{record.marca}</>,
    },
    {
      key: "3",
      title: "Valor",
      render: (record: IProduto) => <>{record.valor}</>,
    },
    {
      key: "4",
      title: "Estoque",
      render: (record: IProduto) => <>{record.estoque}</>,
    },
    {
      key: "6",
      title: "Ações",
      render: (record: IProduto) => {
        return (
          <>
            <div className="flex gap-2">
              <a href="/hotel/modules/produto/visualiza/Verproduto">
                <Button
                  type="primary"
                  className=" bg-blue-950 rounded-full flex items-center justify-center p-2 text-white font-bold"
                >
                  <EyeOutlined />
                </Button>
              </a>
              <Button
                type="primary"
                onClick={() => editar(record)}
                className=" bg-yellow-600 rounded-full flex items-center justify-center p-2 text-white font-bold"
              >
                <EditOutlined />
              </Button>
              <Popconfirm
                title="Você tem certeza que deseja apagar esse registro?"
                onConfirm={() => deletar(record)}
              >
                <Button
                  type="primary"
                  className=" bg-red-600 rounded-full flex items-center justify-center p-2 font-bold"
                >
                  <DeleteOutlined />
                </Button>
              </Popconfirm>
            </div>
          </>
        );
      },
    },
  ];

  const deletar = async (record: IProduto) => {
    setDataSource(dataSource.filter((i: IProduto) => i.id !== record.id));
    // setLoading(true);
    // try {
    //   await rgService.delete(`${record.id}`).then(() => {
    //     const novosDados = dados.filter((i: IRg) => i.id !== record.id);
    //     setDataSource(novosDados);
    //     message.success("Registro apagado com sucesso!");
    //   });
    // } catch (error) {
    //   message.error("Erro ao apagar 027167registro!");
    // } finally {
    //   setLoading(false);
    //   fetchDadosPessoais();
    // }
  };
  const editar = (record: IProduto) => {
    setEditarProduto({ ...record });
    mudaModalEditar();
  };
  // const resetEditing = () => {
  //   // setIsEditing(false);
  //   setEditarproduto(undefined);
  // };

  function mudaModalEditar(): void {
    setModalEditar(!modalEditar);
  }

  function mudaModalCadastrar(): void {
    setModalCadastrar(!modalCadastrar);
  }

  useEffect(() => {
    setDataSource(dados);
  }, [dados]);

  return (
    <div>
      <div onClick={() => mudaModalCadastrar()} className="bg-green-600 w-48 p-4 m-4 flex items-center justify-center rounded font-bold text-white cursor-pointer hover:bg-green-400 hover:text-black">
        Cadastrar Produto
      </div>
      <Table
        columns={columnsRegistro}
        dataSource={dataSource}
        scroll={{ x: 200 }}
        //   emptyTexto="Nenhum rg encontrado"
      />
      <EditarProduto
        dados={editarProduto}
        isOpen={modalEditar}
        setIsOpen={mudaModalEditar}
      />
      <CadastrarProduto
        isOpen={modalCadastrar}
        setIsOpen={mudaModalCadastrar}
      />
    </div>
  );
}
