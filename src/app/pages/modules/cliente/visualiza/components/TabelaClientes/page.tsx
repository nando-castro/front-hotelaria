import Editar from "@/app/shared/botoes/botaoEditar/Editar";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { ICliente } from "../../@types/ICliente";
import EditarCliente from "../ModalEditar/page";

interface TableProps {
  dados: ICliente[];
}

export default function TabelaCliente({ dados }: TableProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [editarCliente, setEditarCliente] = useState<ICliente>();
  const [dataSource, setDataSource] = useState<ICliente[]>(dados);
  const [modalEditar, setModalEditar] = useState<boolean>(false);
  const columnsRegistro: ColumnsType<ICliente> = [
    {
      key: "1",
      title: "Nome",
      render: (record: ICliente) => <> {record.nome} </>,
    },
    {
      key: "2",
      title: "Cpf",
      render: (record: ICliente) => <>{record.cpf}</>,
    },
    {
      key: "3",
      title: "Ações",
      render: (record: ICliente) => {
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

  const deletar = async (record: ICliente) => {
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
  const editar = (record: ICliente) => {
    setEditarCliente({ ...record });
    mudaModalEditar();
  };
  // const resetEditing = () => {
  //   // setIsEditing(false);
  //   setEditarCliente(undefined);
  // };

  function mudaModalEditar(): void {
    setModalEditar(!modalEditar);
  }

  useEffect(() => {
    setDataSource(dados);
  }, [dados]);

  return (
    <div>
      <Table
        columns={columnsRegistro}
        dataSource={dataSource}
        scroll={{ x: 200 }}
        //   emptyTexto="Nenhum rg encontrado"
      />
      <EditarCliente
        dados={editarCliente}
        isOpen={modalEditar}
        setIsOpen={mudaModalEditar}
      />
    </div>
  );
}
