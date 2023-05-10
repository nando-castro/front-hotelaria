import { Col, DatePicker, Form, Input, Modal, Row } from "antd";
import FormItem from "antd/es/form/FormItem";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { IProduto } from "../../@types/IProduto";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  dados: IProduto | undefined;
}

// const { Option } = Select;

const EditarProduto = ({ isOpen, setIsOpen, dados }: ModalProps) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  //   const { addRg } = useDadosPessoais();

  //   const dataAtual = (current) => {
  //     const today = moment();
  //     return current.valueOf() > today;
  //   };

  //   const { fetchDadosPessoais } = useDadosPessoais();

  //   const atualizaDadosRg = async (values: PartialRg) => {
  //     setLoading(true);

  //     const data: PartialRg = {
  //       numeroRg: values?.numeroRg.replace(" ", "").replace(/[^\d]+/g, ""),
  //       codigoEstado:
  //         values?.codigoEstado !== undefined ? values?.codigoEstado : null,
  //       dataExpedicao:
  //         values?.dataExpedicao !== undefined ? values?.dataExpedicao : null,
  //       orgaoExpedidor:
  //         values?.orgaoExpedidor !== undefined ? values?.orgaoExpedidor : null,
  //     };

  //     try {
  //       await rgService.put(`${dados?.id}`, data).then((res) => {
  //         message.success("Registro editado com sucesso!");
  //       });
  //       fetchDadosPessoais();
  //       setIsOpen();
  //     } catch (error) {
  //       message.error("Ocorreu um erro ao editar dados do RG!");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  useEffect(() => {
    form.resetFields();
    form.setFieldsValue({
      descricao: dados?.descricao,
      valor: dados?.valor,
      estoque: dados?.estoque,
      marca: dados?.marca,
      foto: dados?.foto,
      categoria_produto_id: dados?.categoria_produto_id,
      dataCadastro: dayjs(dados?.dataCadastro, "YYYY-MM-DD"),
    });
  }, [
    dados?.categoria_produto_id,
    dados?.dataCadastro,
    dados?.descricao,
    dados?.estoque,
    dados?.foto,
    dados?.marca,
    dados?.valor,
    form,
  ]);

  return (
    <div>
      <Modal
        title="Editar Quarto"
        open={isOpen}
        onCancel={() => setIsOpen()}
        footer={[]}
      >
        <Form
          layout="vertical"
          form={form}
          name="register"
          //   onFinish={atualizaDadosRg}
        >
          <Row gutter={8}>
            <Col xs={24} sm={24} md={24}>
              <label>Descrição</label>
              <FormItem
                name="descricao"
                colon={false}
                /*rules={required}*/ hasFeedback
              >
                <Input placeholder="Nome" />
              </FormItem>
            </Col>

            <Col xs={24} sm={12} md={12}>
              <label>Vagas</label>
              <FormItem name="vagas" colon={false} hasFeedback>
                <Input placeholder="Vagas" />
              </FormItem>
            </Col>

            <Col xs={24} sm={12} md={12}>
              <label>Disponível</label>
              <FormItem name="disponivel" colon={false} hasFeedback>
                <Input placeholder="Disponivel" />
              </FormItem>
            </Col>

            <Col xs={24} sm={12} md={12}>
              <label>Valor</label>
              <FormItem name="valor" colon={false} hasFeedback>
                <Input placeholder="valor" />
              </FormItem>
            </Col>

            <Col xs={16} sm={12} md={12}>
              <label>Data de Cadastro</label>
              <FormItem name="dataCadastro">
                <DatePicker
                  placeholder="Data"
                  // disabledDate={(current) => dataAtual(current)}
                  defaultValue={dayjs("2023-01-01", "YYYY-MM-DD")}
                  format={"DD/MM/YYYY"}
                />
              </FormItem>
            </Col>
          </Row>
          <button>Salvar</button>
        </Form>
      </Modal>
    </div>
  );
};
export default EditarProduto;
