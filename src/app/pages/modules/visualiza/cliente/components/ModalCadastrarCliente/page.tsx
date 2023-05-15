import { Col, DatePicker, Form, Input, Modal, Row } from "antd";
import FormItem from "antd/es/form/FormItem";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { ICliente } from "../../@types/ICliente";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  // dados: ICliente | undefined;
}

// const { Option } = Select;

const CadastrarCliente = ({ isOpen, setIsOpen }: ModalProps) => {
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
  }, [form]);

  return (
    <div>
      <Modal
        title="Cadastrar Cliente"
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
              <label>Nome</label>
              <FormItem
                name="nome"
                colon={false}
                /*rules={required}*/ hasFeedback
              >
                <Input placeholder="Nome" />
              </FormItem>
            </Col>

            <Col xs={24} sm={12} md={12}>
              <label>CPF</label>
              <FormItem name="cpf" colon={false} hasFeedback>
                <Input placeholder="CPF" />
              </FormItem>
            </Col>

            <Col xs={24} sm={12} md={12}>
              <label>Telefone</label>
              <FormItem name="telefone" colon={false} hasFeedback>
                <Input placeholder="telefone" />
              </FormItem>
            </Col>

            <Col xs={24} sm={24} md={24}>
              <label>Email</label>
              <FormItem name="email" colon={false} hasFeedback>
                <Input placeholder="Email" />
              </FormItem>
            </Col>

            <Col xs={16} sm={10} md={10}>
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
export default CadastrarCliente;
