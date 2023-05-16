import { Col, DatePicker, Form, Input, Modal, Row } from "antd";
import FormItem from "antd/es/form/FormItem";
import dayjs from "dayjs";
import { useState } from "react";

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
        title="Cadastrar Categoria Quarto"
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
              <FormItem name="nome" colon={false} hasFeedback>
                <Input placeholder="Nome" />
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
