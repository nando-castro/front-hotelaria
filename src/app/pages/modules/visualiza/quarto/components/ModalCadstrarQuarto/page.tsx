import { Col, DatePicker, Form, Input, Modal, Row } from "antd";
import FormItem from "antd/es/form/FormItem";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { IQuarto } from "../../@types/IQuarto";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

// const { Option } = Select;

const CadastrarQuarto = ({ isOpen, setIsOpen }: ModalProps) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div>
      <Modal
        title="Cadastrar Quarto"
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
export default CadastrarQuarto;
