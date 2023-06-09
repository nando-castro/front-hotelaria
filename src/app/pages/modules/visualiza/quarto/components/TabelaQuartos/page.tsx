import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Popconfirm, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";
import { IQuarto } from "../../@types/IQuarto";
import CadastrarQuarto from "../ModalCadastrarQuarto/page";
import EditarQuarto from "../ModalEditarQuarto/page";

interface TableProps {
  dados: IQuarto[];
}

export function TabelaQuartos({ dados }: TableProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [editarQuarto, setEditarQuarto] = useState<IQuarto>();
  const [cadastrarQuarto, setCadastrarQuarto] = useState<IQuarto>(
    {} as IQuarto
  );
  const [dataSource, setDataSource] = useState<IQuarto[]>(dados);
  const [modalEditar, setModalEditar] = useState<boolean>(false);
  const [modalCadastrar, setModalCadastrar] = useState<boolean>(false);

  const columnsRegistro: ColumnsType<IQuarto> = [
    {
      key: "1",
      title: "Nome",
      render: (record: IQuarto) => <> {record.descricao} </>,
    },
    {
      key: "2",
      title: "Vagas",
      render: (record: IQuarto) => <>{record.vagas}</>,
    },
    {
      key: "3",
      title: "Disponivel",
      render: (record: IQuarto) => (
        <>
          {record.disponivel === true ? (
            <p className="text-green-600 font-bold">Sim</p>
          ) : (
            <p className="text-red-500 font-bold">Não</p>
          )}
        </>
      ),
    },
    {
      key: "4",
      title: "Valor",
      render: (record: IQuarto) => (
        <p className="font-bold">R$ {record.valor}</p>
      ),
    },
    {
      key: "5",
      title: "Ações",
      render: (record: IQuarto) => {
        return (
          <>
            <div className="flex gap-2">
              <a href="/hotel/modules/cliente/visualiza/VerCliente">
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
                // onConfirm={() => deletar(record)}
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

  const deletar = async (record: IQuarto) => {
    setDataSource(dataSource.filter((item) => item.id !== record.id));
  };

  const editar = (record: IQuarto) => {
    setEditarQuarto({ ...record });
    mudaModalEditar();
  };
  // const resetEditing = () => {
  //   // setIsEditing(false);
  //   setEditarCliente(undefined);
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
        Cadastrar Quarto
      </div>
      <Table
        columns={columnsRegistro}
        dataSource={dataSource}
        scroll={{ x: 200 }}
        //   emptyTexto="Nenhum rg encontrado"
      />
      <EditarQuarto
        dados={editarQuarto}
        isOpen={modalEditar}
        setIsOpen={mudaModalEditar}
      />
      <CadastrarQuarto isOpen={modalCadastrar} setIsOpen={mudaModalCadastrar} />
    </div>
  );
}
